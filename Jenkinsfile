pipeline {
    agent any

    stages {
        stage('Build Docker image') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Run Docker container') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
    post {
        always {
            sh 'node -v'
        }
    }
}