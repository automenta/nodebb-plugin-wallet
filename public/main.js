$(document).ready(function () {
	$(window).on('action:ajaxify.end', function(e, data) {     

		
		var showingPopup = false;

		var buttonid = 'WalletPlugin_ToggleButton';
		var walletToggleButton = $('<li id="' + buttonid + '"><a><i class="fa fa-money" title="Wallet"></i><span class="visible-xs-inline"> Wallet</span></a></li>');

		$('#main-nav').append(walletToggleButton);
		

		$('#' + buttonid).click(function () {
			if (showingPopup) {
				disableWalletPopup();
			} else {
				enableWalletPopup();
			}
		});

		function enableWalletPopup() {
		}
		function disableWalletPopup() {
		}
	
	});
	
});