pipeline {
    agent any
 
    stages {
        stage('Build') {
            steps {
                script {             
                        // Install dependencies using npm
                        bat 'npm install'               
                }
            }
        }
        stage('Test') {
            steps {
               script {                    
                        // Run Cypress tests using npm
                        bat 'npx cypress run'                   
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Success deploying...'
            }
        }
    }
}