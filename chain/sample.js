/**
 * Sample transaction processor function.
 * @param {org.acme.sample.SampleTransaction} tx The sample transaction instance.
 * @transaction
 */
function sampleTransaction(tx) {
    
        // Save the old value of the asset.
        var oldValue1 = tx.asset.sum_exchange;
        var oldValue2 = tx.asset.sum_toasset;
    
        // Update the asset with the new value.
        tx.asset.sum_exchange = tx.exchange + oldValue1;
        tx.asset.sum_toasset = tx.toasset + oldValue2;
    
        // Get the asset registry for the asset.
        return getAssetRegistry('org.acme.sample.SampleAsset')
            .then(function (assetRegistry) {
    
                // Update the asset in the asset registry.
                return assetRegistry.update(tx.asset);
    
            })
            .then(function () {
    
                // Emit an event for the modified asset.
                var event = getFactory().newEvent('org.acme.sample', 'SampleEvent');
                event.asset = tx.asset;
                emit(event);
    
            });
    
    }