pipeline {
    agent any

    options {
        timeout(time: 2, unit: 'MINUTES')
    }

    environment {
        ARTIFACT_ID = "mengasis/algorithms:${env.BUILD_NUMBER}"
    }

    stages {
        stage('Build') {
            steps {
                script {
                    dir('') {
                        dockerImage = docker.build "${env.ARTIFACT_ID}"
                    }
                }
            }
        }

        stage('Test') {
            steps {
                sh "docker run ${dockerImage.id} npm test"
            }
        }
    }
}