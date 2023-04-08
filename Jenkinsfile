pipeline {
    agent any

    stages {
        stage('Build Docker image') {
            steps {
                sh 'docker build -t docker-nexjs .'
            }
        }

        stage('Run Docker container') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}