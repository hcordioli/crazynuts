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

var changeAgencyID = {
   "AccessToken": "toBeUpdated",
   "UserAttributes": [ 
      { 
         "Name": "custom:agencyID",
         "Value": "agencia-1"
      }
   ]
}

var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser (userData);
console.log ('   authentication details:' + authenticationDetails);
console.log ('   pool data:' + poolData);
console.log ('   user pool:' + userPool);
console.log ('   auth data:' + authenticationData);


/*
    Como estou usando No Secret Pool Data, este trecho é desnecessário. 
    Ele é sugerido no caso de usar um Pool Data com Secret, mas não funcionou

crypto.createHmac('SHA256', 'ln89dvjkira3ig3d953ptnedgdeora046k1htp3uj74i8n4sp5u')
  .update('hcordioli' + 'cgnap9bdn604hqe4vvtbbgjmp')
  .digest('base64')
*/


cognitoUser.authenticateUser (authenticationDetails, {
    onSuccess: function (result) {
        console.log ('access token + ' + result.getAccessToken().getJwtToken());
//            Use the idToken for Logins map when Federating User Pools with Cognito Identity or when passing through an Authorization Header to an API gateway Authorizer
        console.log ('idToken + '+ result.idToken.jwtToken);
        var params = {
            UserAttributes: [
                {
                    Name: 'custom:agencyID', /* required */
                    Value: 'MI6'
                },
                {
                    Name: 'custom:agentID', /* required */
                    Value: 'agent-007'
                },
            /* more items */
            ],
            UserPoolId: 'us-east-1_ZZFoRVU9r', /* required */
            Username: 'hcordioli' /* required */
        };
        var cognitoidentityserviceprovider = new AWSCognito.CognitoIdentityServiceProvider();
        cognitoidentityserviceprovider.adminUpdateUserAttributes(params, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else     console.log(data);           // successful response
        });
        
    },
    onFailure: function (err) {
        console.log ('   erro no username' + err);
 //       alert (err);
    },
});