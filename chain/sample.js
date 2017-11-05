/**
 * Sample transaction processor function.
 * @param {wallet.trans} tx The sample transaction instance.
 * @transaction
 */
function trans(tx) {
    
        // Save the old value of the asset.
        var oldValue = tx.asset.value;
        // Update the asset with the new value.
        tx.asset.value = tx.exchange + oldValue;
    
        // Get the asset registry for the asset.
        return getAssetRegistry('wallet.partner_info')
            .then(function (assetRegistry) {
    
                // Update the asset in the asset registry.
                return assetRegistry.update(tx.asset);
    
            })
            .then(function () {
    
                // Emit an event for the modified asset.
                var event = getFactory().newEvent('wallet', 'SampleEvent');
                event.asset = tx.asset;
                emit(event);
    
            });
    
    }