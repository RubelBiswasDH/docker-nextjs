pipeline {
    agent any

    stages {
        // stage('Pull Docker image') {
        //     when {
        //         branch 'main'
        //     }
        //     steps {
        //         sh 'cd /home/rubel/Codebase/Docker/docker-ls/docker-nextjs'
        //         sh 'docker-compose down'
        //         sh 'docker-compose pull'
        //     }
        // }

        stage('Dev - Pull Docker image') {
            steps {
                // sh 'cd /home/rubel/Codebase/Docker/docker-ls/docker-nextjs-stg'
                sh 'pwd'
                sh 'whoami'
                sh 'docker-compose down'
                sh 'docker-compose pull'
            }
        }

        stage('Run Docker container') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}