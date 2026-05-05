pipeline {
    agent any

    tools {
        jdk 'JAVA_HOME'
        nodejs 'Node18'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Eureka') {
            steps {
                dir('backEnd/eureka') {
                    sh 'chmod +x mvnw'
                    sh './mvnw clean package'
                }
            }
        }

        stage('Build Gateway') {
            steps {
                dir('backEnd/Gateway') {
                    sh 'chmod +x mvnw'
                    sh './mvnw clean package -DskipTests'
                }
            }
        }

        stage('Build User Service') {
            steps {
                dir('backEnd/microservices/User') {
                    sh 'chmod +x mvnw'
                    sh './mvnw clean package -DskipTests'
                }
            }
        }

        stage('Build Quiz Service') {
            steps {
                dir('backEnd/microservices/Quiz') {
                    sh 'chmod +x mvnw'
                    sh './mvnw clean package'
                }
            }
        }

        stage('Build Angular Frontend') {
            steps {
                dir('frontEnd/EnglishPlateforme') {
                    sh 'npm ci'
                    sh 'npm run build'
                }
            }
        }

        stage('Test Angular Quiz Service') {
            steps {
                dir('frontEnd/EnglishPlateforme') {
                    sh 'npx ng test --watch=false --browsers=ChromeHeadlessNoSandbox --karma-config=karma.conf.js --include=src/app/services/quiz.service.spec.ts'
                }
            }
        }
    }

    post {
        always {
            junit allowEmptyResults: true, testResults: '**/target/surefire-reports/*.xml'
        }

        success {
            echo 'CI build completed successfully.'
        }

        failure {
            echo 'CI build failed. Check the Jenkins console output.'
        }
    }
}
