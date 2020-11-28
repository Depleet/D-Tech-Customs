"use strict";

exports.mod = () => {
    if (!serverConfig.rebuildCache) {
        return;
    }
    
    logger.logInfo("Cached: D33PR Series 5.56x45mm round injection");
    let base = fileIO.parse(fileIO.read(db.user.cache.items));
    let data = base.data;

    for (let k in data) {
        if ((data[k]._id) && (data[k]._id == "5ac66cb05acfc40198510a10" || data[k]._id == "5bb2475ed4351e00853264e3" || data[k]._id == "5c07c60e0db834002330051f" || data[k]._id == "5c488a752e221602b412af63" || data[k]._id == "5d43021ca4b9362eab4b5e25" || data[k]._id == "5447a9cd4bdc2dbd208b4567")) {
            let chamber = data[k]._props.Chambers[0]._props.filters[0].Filter 
            chamber.push("d33p556x45r", "d33p556x45rd", "d33p556x45rdx");
        }
    }
	
	for (let z in data) {
		if ((data[z]._id) && (data[z]._id == "5ac66cb05acfc40198510a10" || data[z]._id == "5bb2475ed4351e00853264e3" || data[z]._id == "5c07c60e0db834002330051f" || data[z]._id == "5c488a752e221602b412af63" || data[z]._id == "5d43021ca4b9362eab4b5e25" || data[z]._id == "5447a9cd4bdc2dbd208b4567")) {
			let magazine = data[z]._props.Slots[1]._props.filters[0].Filter 
			magazine.push("pmagxd33p556x45r");
		}
	}
	
    for (let m in data) {
        if ((data[m]._id) && (data[m]._id == "pmagxd33p556x45r" || data[m]._id == "55d4887d4bdc2d962f8b4570" || data[m]._id == "5c05413a0db834001c390617" || data[m]._id == "5c6d450c2e221600114c997d" || data[m]._id == "5c6d42cb2e2216000e69d7d1" || data[m]._id == "59c1383d86f774290a37e0ca" || data[m]._id == "5aaa5e60e5b5b000140293d6" || data[m]._id == "5448c1d04bdc2dff2f8b4569" || data[m]._id == "5aaa5dfee5b5b000140293d3" || data[m]._id == "5d1340b3d7ad1a0b52682ed7" || data[m]._id == "544a378f4bdc2d30388b4567" || data[m]._id == "5d1340bdd7ad1a0e8d245aab" || data[m]._id == "55802d5f4bdc2dac148b458e" || data[m]._id == "5d1340cad7ad1a0b0b249869" || data[m]._id == "5c6592372e221600133e47d7" || data[m]._id == "544a37c44bdc2d25388b4567" || data[m]._id == "5c6d46132e221601da357d56" || data[m]._id == "5c0548ae0db834001966a3c2" || data[m]._id == "5ac66c5d5acfc4001718d314")) {
            let magazines = data[m]._props.Cartridges[0]._props.filters[0].Filter
            magazines.push("d33p556x45r", "d33p556x45rd", "d33p556x45rdx");
        }
	}
    fileIO.write("user/cache/items.json", base);
}