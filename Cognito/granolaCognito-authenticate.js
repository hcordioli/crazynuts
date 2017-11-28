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
var clientSecret = 'ln89dvjkira3ig3d953ptnedgdeora046k1htp3uj74i8n4sp5u'; // granolaweb
var poolData = {
    UserPoolId : 'us-east-1_ZZFoRVU9r',

//  No Secret: granolawebnosecret
    ClientId : 'otnuoul2b7v88e5qou8nsu24u',

//  with Secret: granolaweb
//    ClientId : 'cgnap9bdn604hqe4vvtbbgjmp',
};

var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool (poolData);

/* Authenticating username */

console.log ('Authenticating username');
var authenticationData = {
    Username : 'hcordioli',     // alterar conforme necessidade
    Password : 'Cr@zynuts1961',   // alterar conforme necessidade
};

var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);

var userData = {
    Username : 'hcordioli', // alterar conforme necessidade
    Pool : userPool
};

var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser (userData);
console.log ('   authentication details:' + authenticationDetails);
console.log ('   pool data:' + poolData);
console.log ('   user pool:' + userPool);
console.log ('   auth data:' + authenticationData);

cognitoUser.authenticateUser (authenticationDetails, {
    onSuccess: function (result) {
        console.log ('access token + ' + result.getAccessToken().getJwtToken());
//            Use the idToken for Logins map when Federating User Pools with Cognito Identity or when passing through an Authorization Header to an API gateway Authorizer
        console.log ('idToken + '+ result.idToken.jwtToken);
    },
    onFailure: function (err) {
        console.log ('   erro no username' + err);
 //       alert (err);
    },

/*
    Opção desnecessária, pois não estou usando isso no Pool de usuários 

    mfaRequired: function(codeDeliveryDetails) {
            // MFA is required to complete user authentication. 
            // Get the code from user and call 
            cognitoUser.sendMFACode(mfaCode, this)
    },
*/
    newPasswordRequired: function(userAttributes, requiredAttributes) {
        // User was signed up by an admin and must provide new 
        // password and required attributes, if any, to complete 
        // authentication.

        // userAttributes: object, which is the user's current profile. It will list all attributes that are associated with the user. 
        // Required attributes according to schema, which don’t have any values yet, will have blank values.
        // requiredAttributes: list of attributes that must be set by the user along with new password to complete the sign-in.

            
        // Get these details and call 
        // newPassword: password that user has given
        // attributesData: object with key as attribute name and value that the user has given.
        var attributesData = {
        };

        cognitoUser.completeNewPasswordChallenge('Cr@zynuts1961', attributesData, this) // alterar conforme necessidade
    }
});