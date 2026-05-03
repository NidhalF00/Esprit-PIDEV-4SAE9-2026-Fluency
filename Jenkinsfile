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
                    sh './mvnw clean package -DskipTests'
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
                    sh './mvnw clean package -DskipTests'
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
    }

    post {
        success {
            echo 'CI build completed successfully.'
        }

        failure {
            echo 'CI build failed. Check the Jenkins console output.'
        }
    }
}
