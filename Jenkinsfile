pipeline{
    agent any
    tools{
        nodejs 'nodejs'
    }
    stages{
        stage('clone git'){
            steps{
                git 'https://github.com/JoanChege/gallery-IP1.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Use npm command to install dependencies
                sh 'npm install --no-audit'
            }
        }
        stage('Build') {
            steps {
                // Use npm command to run build
                sh 'npm start'
            }
        }
    }
}