var config = new CloudOauthConfig(); // Cloud PKI configuration
config.setHost("https://cloud.govca.rw/cloud-service");
config.setClientId("TestEDS");
config.setRedirectUri("http://localhost:5500/callback.html");
config.setScope("read");

// get signature value in PDF from CloudPKI
function getP7DetachedMessageFromCloud() {
	var cloudoauth = new CloudOauth(config);

	var customCallback = function(result) {
		$("#textarea-p7-detached-message").val(result.CP400.p7SignHex);
		$("#textarea-certificate").val(result.CP400.certHex);
	
	}
	//var plainText = $('#text-pdf-hash').val();
	var plainText = "4EF9395AB29A9B60BFFC208B509381D0242A2E2249271E86B4BA5906AEDD4480";
		cloudoauth
		.setApiCodes("CP400,CP300")
		.setPlainText(plainText, true)		
		.call(customCallback);
}



