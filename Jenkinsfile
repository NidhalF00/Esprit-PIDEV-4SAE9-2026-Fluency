pipeline {
    agent any

    tools {
        maven 'maven'
    }

    stages {
        stage('Checkout') {
            steps {
                deleteDir()
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    extensions: [[
                        $class: 'CloneOption',
                        depth: 1,
                        noTags: true,
                        shallow: true,
                        timeout: 30
                    ]],
                    userRemoteConfigs: [[
                        credentialsId: 'github-credentials',
                        url: 'https://github.com/NidhalF00/Esprit-PIDEV-4SAE9-2026-Fluency.git'
                    ]]
                ])
            }
        }

        stage('Build & Test') {
            steps {
                dir('backend/claim-service') {
                    sh 'mvn verify -Dspring.profiles.active=test --no-transfer-progress'
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('sonarqube') {
                    dir('backend/claim-service') {
                        sh '''
                            mvn sonar:sonar \
                                -Dsonar.projectKey=pidev \
                                -Dsonar.projectName=ClaimService \
                                -Dsonar.coverage.jacoco.xmlReportPaths=target/site/jacoco/jacoco.xml \
                                --no-transfer-progress
                        '''
                    }
                }
            }
        }

        stage('Build All Services') {
            steps {
                dir('backend') {
                    sh 'mvn package -DskipTests --no-transfer-progress'
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker compose -f docker-compose.yml build'
            }
        }

        stage('Docker Push') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin

                        docker tag platform-education4sae9--claim-service $DOCKER_USER/claim-service:latest
                        docker push $DOCKER_USER/claim-service:latest

                        docker tag platform-education4sae9--auth-service $DOCKER_USER/auth-service:latest
                        docker push $DOCKER_USER/auth-service:latest

                        docker tag platform-education4sae9--gateway-service $DOCKER_USER/gateway-service:latest
                        docker push $DOCKER_USER/gateway-service:latest

                        docker tag platform-education4sae9--course-service $DOCKER_USER/course-service:latest
                        docker push $DOCKER_USER/course-service:latest

                        docker tag platform-education4sae9--forum-service $DOCKER_USER/forum-service:latest
                        docker push $DOCKER_USER/forum-service:latest

                        docker tag platform-education4sae9--resource-service $DOCKER_USER/resource-service:latest
                        docker push $DOCKER_USER/resource-service:latest

                        docker tag platform-education4sae9--eureka-server $DOCKER_USER/eureka-server:latest
                        docker push $DOCKER_USER/eureka-server:latest
                    '''
                }
            }
        }
    }
}