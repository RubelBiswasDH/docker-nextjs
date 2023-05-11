pipeline {
    agent any

    stages {
        stage('Pull Docker image') {
            when {
                branch 'main'
            }
            steps {
                sh 'docker-compose down'
                sh 'docker-compose pull'
            }
        }

        stage('Dev - Pull Docker image') {
            when {
                branch 'dev'
            }
            steps {
                sh 'docker-compose -f docker-compose-dev.yml down'
                sh 'docker-compose -f docker-compose-dev.yml pull'
            }
        }

        stage('Run Docker container') {
            when {
                branch 'main'
            }
            steps {
                sh 'docker-compose up -d'
            }
        }

        stage('Dev - Run Docker container') {
            when {
                branch 'dev'
            }
            steps {
                sh 'docker-compose -f docker-compose-dev.yml up -d'
            }
        }
    }
}