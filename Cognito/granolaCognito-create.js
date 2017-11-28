var AWSCognito = require('aws-sdk');
         require ('amazon-cognito-identity-js');
         require ('big-integer');
         require ('crypto-js');
const crypto = require('crypto');

var CognitoSDK = require('amazon-cognito-identity-js-node');
AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails = CognitoSDK.AuthenticationDetails;
AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool = CognitoSDK.CognitoUserPool;
AWSCognito.CognitoIdentityServiceProvider.CognitoUser = CognitoSDK.CognitoUser;
AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute = CognitoSDK.CognitoUserAttribute;
AWSCognito.config.region = 'us-east-1'; //This is required to derive the endpoint

// Dados do App Client Id (não se trata de dados do usuário, mas sim da app vinculada)
var clientSecret = 'ln89dvjkira3ig3d953ptnedgdeora046k1htp3uj74i8n4sp5u';
var poolData = {
    UserPoolId : 'us-east-1_ZZFoRVU9r',

//  No Secret: granolawebnosecret
    ClientId : 'otnuoul2b7v88e5qou8nsu24u',

//  with Secret: granolaweb
//    ClientId : 'cgnap9bdn604hqe4vvtbbgjmp',
};



/* registering username */
console.log ('registering username');	// alterar conforme necessidade
console.log ('   region:' + AWSCognito.config.region);

var params = {
	ClientId: 'otnuoul2b7v88e5qou8nsu24u', // required - Dados do App Client Id (não se trata de dados do usuário, mas sim da app vinculada)
    Password: 'Gr@n0l@2017', // required - alterar conforme necessidade
    Username: 'fguardia', // required - alterar conforme necessidade
    UserAttributes: [
		{
			Name: 'email', /* required */
            Value: 'franciscoeguardia@gmail.com' // required - alterar conforme necessidade
        }
    ]};

var userPool = new AWSCognito.CognitoIdentityServiceProvider();
var responseData = null;
userPool.signUp(params, function(err, data) {
	if (err) console.log(err, err.stack); // an error occurred
    else {
		console.log('   OK: ' + data);
        responseData = data;
    }
});