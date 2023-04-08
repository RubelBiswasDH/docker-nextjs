pipeline {
    agent any

    stages {
        stage('Build Docker image') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose build --no-cache'
            }
        }

        stage('Run Docker container') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}