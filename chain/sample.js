function sampleTransaction(tx) {
    
        // Save the old value of the asset.
        var newexchange = tx.asset.sum_exchange+tx.exchange;
    
        // Update the asset with the new value.
        tx.asset.sum_exchange = newexchange;
      
        // Save the old value of the asset.
        var newtoasset = tx.asset.sum_toasset+tx.toasset;
    
        // Update the asset with the new value.
        tx.asset.sum_toasset = newtoasset;
    
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
    