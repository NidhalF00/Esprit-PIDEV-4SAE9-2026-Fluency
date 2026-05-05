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
    }
}