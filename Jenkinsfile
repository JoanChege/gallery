pipeline {
    agent any

    tools {
        nodejs 'nodejs'
    }

    stages {
        stage('Clone Git Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/JoanChege/gallery-IP1.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Checkout Test Branch') {
            steps {
                git branch: 'test', url: 'https://github.com/JoanChege/gallery-IP1.git'
            }
        }

        stage('Run Tests') {
            steps {
                dir('test') {
                    sh 'npm test'
                }
            }
        }

        stage('Build and Start Application') {
            steps {
                script {
                    try {
                        sh 'npm start &'
                        sleep(time: 10, unit: 'SECONDS')
                    } catch (err) {
                        echo "Error: ${err}"
                        currentBuild.result = 'FAILURE'
                    }
                }
            }
        }
    }

    post {
        failure {
            mail to: 'jncheg@gmail.com',
                 subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
                 body: "Something is wrong with ${env.BUILD_URL}"
        }
        always {
            echo 'Slack Notification'
            slackSend(
                channel: '#ip',
                message: """*${currentBuild.currentResult}:* Pipeline ${env.JOB_NAME}
Build ${env.BUILD_NUMBER}
More info at: ${env.BUILD_URL}
Build ID: ${env.BUILD_ID}
Render URL: <https://gallery-ip1-2d4h.onrender.com>""",
                tokenCredentialId: 'slack'
            )
        }
    }
}