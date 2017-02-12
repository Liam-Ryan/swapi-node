"use strict";

let starships = {
    //set x week for b-wing consumables to test starship-jump when unit does not parse to number
    page1: `{
    "count": 37, 
    "next": "http://localhost:9784/starships?page=2", 
    "previous": null, 
    "results": [
        {
            "name": "Sentinel-class landing craft", 
            "model": "Sentinel-class landing craft", 
            "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks", 
            "cost_in_credits": "240000", 
            "length": "38", 
            "max_atmosphering_speed": "1000", 
            "crew": "5", 
            "passengers": "75", 
            "cargo_capacity": "180000", 
            "consumables": "1 month", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "70", 
            "starship_class": "landing craft", 
            "pilots": [], 
            "films": [
                "http://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-10T15:48:00.586000Z", 
            "edited": "2014-12-22T17:35:44.431407Z", 
            "url": "http://swapi.co/api/starships/5/"
        }, 
        {
            "name": "Death Star", 
            "model": "DS-1 Orbital Battle Station", 
            "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems", 
            "cost_in_credits": "1000000000000", 
            "length": "120000", 
            "max_atmosphering_speed": "n/a", 
            "crew": "342953", 
            "passengers": "843342", 
            "cargo_capacity": "1000000000000", 
            "consumables": "3 years", 
            "hyperdrive_rating": "4.0", 
            "MGLT": "10", 
            "starship_class": "Deep Space Mobile Battlestation", 
            "pilots": [], 
            "films": [
                "http://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-10T16:36:50.509000Z", 
            "edited": "2014-12-22T17:35:44.452589Z", 
            "url": "http://swapi.co/api/starships/9/"
        }, 
        {
            "name": "Millennium Falcon", 
            "model": "YT-1300 light freighter", 
            "manufacturer": "Corellian Engineering Corporation", 
            "cost_in_credits": "100000", 
            "length": "34.37", 
            "max_atmosphering_speed": "1050", 
            "crew": "4", 
            "passengers": "6", 
            "cargo_capacity": "100000", 
            "consumables": "2 months", 
            "hyperdrive_rating": "0.5", 
            "MGLT": "75", 
            "starship_class": "Light freighter", 
            "pilots": [
                "http://swapi.co/api/people/13/", 
                "http://swapi.co/api/people/14/", 
                "http://swapi.co/api/people/25/", 
                "http://swapi.co/api/people/31/"
            ], 
            "films": [
                "http://swapi.co/api/films/7/", 
                "http://swapi.co/api/films/3/", 
                "http://swapi.co/api/films/2/", 
                "http://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-10T16:59:45.094000Z", 
            "edited": "2014-12-22T17:35:44.464156Z", 
            "url": "http://swapi.co/api/starships/10/"
        }, 
        {
            "name": "Y-wing", 
            "model": "BTL Y-wing", 
            "manufacturer": "Koensayr Manufacturing", 
            "cost_in_credits": "134999", 
            "length": "14", 
            "max_atmosphering_speed": "1000km", 
            "crew": "2", 
            "passengers": "0", 
            "cargo_capacity": "110", 
            "consumables": "1 week", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "80", 
            "starship_class": "assault starfighter", 
            "pilots": [], 
            "films": [
                "http://swapi.co/api/films/3/", 
                "http://swapi.co/api/films/2/", 
                "http://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-12T11:00:39.817000Z", 
            "edited": "2014-12-22T17:35:44.479706Z", 
            "url": "http://swapi.co/api/starships/11/"
        }, 
        {
            "name": "X-wing", 
            "model": "T-65 X-wing", 
            "manufacturer": "Incom Corporation", 
            "cost_in_credits": "149999", 
            "length": "12.5", 
            "max_atmosphering_speed": "1050", 
            "crew": "1", 
            "passengers": "0", 
            "cargo_capacity": "110", 
            "consumables": "1 week", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "100", 
            "starship_class": "Starfighter", 
            "pilots": [
                "http://swapi.co/api/people/1/", 
                "http://swapi.co/api/people/9/", 
                "http://swapi.co/api/people/18/", 
                "http://swapi.co/api/people/19/"
            ], 
            "films": [
                "http://swapi.co/api/films/3/", 
                "http://swapi.co/api/films/2/", 
                "http://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-12T11:19:05.340000Z", 
            "edited": "2014-12-22T17:35:44.491233Z", 
            "url": "http://swapi.co/api/starships/12/"
        }, 
        {
            "name": "TIE Advanced x1", 
            "model": "Twin Ion Engine Advanced x1", 
            "manufacturer": "Sienar Fleet Systems", 
            "cost_in_credits": "unknown", 
            "length": "9.2", 
            "max_atmosphering_speed": "1200", 
            "crew": "1", 
            "passengers": "0", 
            "cargo_capacity": "150", 
            "consumables": "5 days", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "105", 
            "starship_class": "Starfighter", 
            "pilots": [
                "http://swapi.co/api/people/4/"
            ], 
            "films": [
                "http://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-12T11:21:32.991000Z", 
            "edited": "2014-12-22T17:35:44.549047Z", 
            "url": "http://swapi.co/api/starships/13/"
        }, 
        {
            "name": "Executor", 
            "model": "Executor-class star dreadnought", 
            "manufacturer": "Kuat Drive Yards, Fondor Shipyards", 
            "cost_in_credits": "1143350000", 
            "length": "19,000", 
            "max_atmosphering_speed": "n/a", 
            "crew": "279144", 
            "passengers": "38000", 
            "cargo_capacity": "250000000", 
            "consumables": "6 years", 
            "hyperdrive_rating": "2.0", 
            "MGLT": "40", 
            "starship_class": "Star dreadnought", 
            "pilots": [], 
            "films": [
                "http://swapi.co/api/films/3/", 
                "http://swapi.co/api/films/2/"
            ], 
            "created": "2014-12-15T12:31:42.547000Z", 
            "edited": "2014-12-22T17:35:44.638231Z", 
            "url": "http://swapi.co/api/starships/15/"
        }, 
        {
            "name": "Slave 1", 
            "model": "Firespray-31-class patrol and attack", 
            "manufacturer": "Kuat Systems Engineering", 
            "cost_in_credits": "unknown", 
            "length": "21.5", 
            "max_atmosphering_speed": "1000", 
            "crew": "1", 
            "passengers": "6", 
            "cargo_capacity": "70000", 
            "consumables": "1 month", 
            "hyperdrive_rating": "3.0", 
            "MGLT": "70", 
            "starship_class": "Patrol craft", 
            "pilots": [
                "http://swapi.co/api/people/22/"
            ], 
            "films": [
                "http://swapi.co/api/films/5/", 
                "http://swapi.co/api/films/2/"
            ], 
            "created": "2014-12-15T13:00:56.332000Z", 
            "edited": "2014-12-22T17:35:44.716273Z", 
            "url": "http://swapi.co/api/starships/21/"
        }, 
        {
            "name": "Imperial shuttle", 
            "model": "Lambda-class T-4a shuttle", 
            "manufacturer": "Sienar Fleet Systems", 
            "cost_in_credits": "240000", 
            "length": "20", 
            "max_atmosphering_speed": "850", 
            "crew": "6", 
            "passengers": "20", 
            "cargo_capacity": "80000", 
            "consumables": "2 months", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "50", 
            "starship_class": "Armed government transport", 
            "pilots": [
                "http://swapi.co/api/people/1/", 
                "http://swapi.co/api/people/13/", 
                "http://swapi.co/api/people/14/"
            ], 
            "films": [
                "http://swapi.co/api/films/3/", 
                "http://swapi.co/api/films/2/"
            ], 
            "created": "2014-12-15T13:04:47.235000Z", 
            "edited": "2014-12-22T17:35:44.795405Z", 
            "url": "http://swapi.co/api/starships/22/"
        }, 
        {
            "name": "EF76 Nebulon-B escort frigate", 
            "model": "EF76 Nebulon-B escort frigate", 
            "manufacturer": "Kuat Drive Yards", 
            "cost_in_credits": "8500000", 
            "length": "300", 
            "max_atmosphering_speed": "800", 
            "crew": "854", 
            "passengers": "75", 
            "cargo_capacity": "6000000", 
            "consumables": "2 years", 
            "hyperdrive_rating": "2.0", 
            "MGLT": "40", 
            "starship_class": "Escort ship", 
            "pilots": [], 
            "films": [
                "http://swapi.co/api/films/3/", 
                "http://swapi.co/api/films/2/"
            ], 
            "created": "2014-12-15T13:06:30.813000Z", 
            "edited": "2014-12-22T17:35:44.848329Z", 
            "url": "http://swapi.co/api/starships/23/"
        }
    ]
}`,
    page2: `{
    "count": 37, 
    "next": null, 
    "previous": "http://localhost:9784/starships/?page=1", 
    "results": [
        {
            "name": "Calamari Cruiser", 
            "model": "MC80 Liberty type Star Cruiser", 
            "manufacturer": "Mon Calamari shipyards", 
            "cost_in_credits": "104000000", 
            "length": "1200", 
            "max_atmosphering_speed": "n/a", 
            "crew": "5400", 
            "passengers": "1200", 
            "cargo_capacity": "unknown", 
            "consumables": "2 years", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "60", 
            "starship_class": "Star Cruiser", 
            "pilots": [], 
            "films": [
                "http://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-18T10:54:57.804000Z", 
            "edited": "2014-12-22T17:35:44.957852Z", 
            "url": "http://swapi.co/api/starships/27/"
        }, 
        {
            "name": "A-wing", 
            "model": "RZ-1 A-wing Interceptor", 
            "manufacturer": "Alliance Underground Engineering, Incom Corporation", 
            "cost_in_credits": "175000", 
            "length": "9.6", 
            "max_atmosphering_speed": "1300", 
            "crew": "1", 
            "passengers": "0", 
            "cargo_capacity": "40", 
            "consumables": "1 week", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "120", 
            "starship_class": "Starfighter", 
            "pilots": [
                "http://swapi.co/api/people/29/"
            ], 
            "films": [
                "http://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-18T11:16:34.542000Z", 
            "edited": "2014-12-22T17:35:44.978754Z", 
            "url": "http://swapi.co/api/starships/28/"
        }, 
        {
            "name": "B-wing", 
            "model": "A/SF-01 B-wing starfighter", 
            "manufacturer": "Slayn & Korpil", 
            "cost_in_credits": "220000", 
            "length": "16.9", 
            "max_atmosphering_speed": "950", 
            "crew": "1", 
            "passengers": "0", 
            "cargo_capacity": "45", 
            "consumables": "x week", 
            "hyperdrive_rating": "2.0", 
            "MGLT": "91", 
            "starship_class": "Assault Starfighter", 
            "pilots": [], 
            "films": [
                "http://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-18T11:18:04.763000Z", 
            "edited": "2014-12-22T17:35:45.011193Z", 
            "url": "http://swapi.co/api/starships/29/"
        }, 
        {
            "name": "Republic Cruiser", 
            "model": "Consular-class cruiser", 
            "manufacturer": "Corellian Engineering Corporation", 
            "cost_in_credits": "unknown", 
            "length": "115", 
            "max_atmosphering_speed": "900", 
            "crew": "9", 
            "passengers": "16", 
            "cargo_capacity": "unknown", 
            "consumables": "unknown", 
            "hyperdrive_rating": "2.0", 
            "MGLT": "unknown", 
            "starship_class": "Space cruiser", 
            "pilots": [], 
            "films": [
                "http://swapi.co/api/films/4/"
            ], 
            "created": "2014-12-19T17:01:31.488000Z", 
            "edited": "2014-12-22T17:35:45.027308Z", 
            "url": "http://swapi.co/api/starships/31/"
        }, 
        {
            "name": "Naboo fighter", 
            "model": "N-1 starfighter", 
            "manufacturer": "Theed Palace Space Vessel Engineering Corps", 
            "cost_in_credits": "200000", 
            "length": "11", 
            "max_atmosphering_speed": "1100", 
            "crew": "1", 
            "passengers": "0", 
            "cargo_capacity": "65", 
            "consumables": "7 days", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "unknown", 
            "starship_class": "Starfighter", 
            "pilots": [
                "http://swapi.co/api/people/11/", 
                "http://swapi.co/api/people/60/", 
                "http://swapi.co/api/people/35/"
            ], 
            "films": [
                "http://swapi.co/api/films/5/", 
                "http://swapi.co/api/films/4/"
            ], 
            "created": "2014-12-19T17:39:17.582000Z", 
            "edited": "2014-12-22T17:35:45.079452Z", 
            "url": "http://swapi.co/api/starships/39/"
        }, 
        {
            "name": "Naboo Royal Starship", 
            "model": "J-type 327 Nubian royal starship", 
            "manufacturer": "Theed Palace Space Vessel Engineering Corps, Nubia Star Drives", 
            "cost_in_credits": "unknown", 
            "length": "76", 
            "max_atmosphering_speed": "920", 
            "crew": "8", 
            "passengers": "unknown", 
            "cargo_capacity": "unknown", 
            "consumables": "unknown", 
            "hyperdrive_rating": "1.8", 
            "MGLT": "unknown", 
            "starship_class": "yacht", 
            "pilots": [
                "http://swapi.co/api/people/39/"
            ], 
            "films": [
                "http://swapi.co/api/films/4/"
            ], 
            "created": "2014-12-19T17:45:03.506000Z", 
            "edited": "2014-12-22T17:35:45.091925Z", 
            "url": "http://swapi.co/api/starships/40/"
        }, 
        {
            "name": "Scimitar", 
            "model": "Star Courier", 
            "manufacturer": "Republic Sienar Systems", 
            "cost_in_credits": "55000000", 
            "length": "26.5", 
            "max_atmosphering_speed": "1180", 
            "crew": "1", 
            "passengers": "6", 
            "cargo_capacity": "2500000", 
            "consumables": "30 days", 
            "hyperdrive_rating": "1.5", 
            "MGLT": "unknown", 
            "starship_class": "Space Transport", 
            "pilots": [
                "http://swapi.co/api/people/44/"
            ], 
            "films": [
                "http://swapi.co/api/films/4/"
            ], 
            "created": "2014-12-20T09:39:56.116000Z", 
            "edited": "2014-12-22T17:35:45.105522Z", 
            "url": "http://swapi.co/api/starships/41/"
        }, 
        {
            "name": "J-type diplomatic barge", 
            "model": "J-type diplomatic barge", 
            "manufacturer": "Theed Palace Space Vessel Engineering Corps, Nubia Star Drives", 
            "cost_in_credits": "2000000", 
            "length": "39", 
            "max_atmosphering_speed": "2000", 
            "crew": "5", 
            "passengers": "10", 
            "cargo_capacity": "unknown", 
            "consumables": "1 year", 
            "hyperdrive_rating": "0.7", 
            "MGLT": "unknown", 
            "starship_class": "Diplomatic barge", 
            "pilots": [], 
            "films": [
                "http://swapi.co/api/films/5/"
            ], 
            "created": "2014-12-20T11:05:51.237000Z", 
            "edited": "2014-12-22T17:35:45.124386Z", 
            "url": "http://swapi.co/api/starships/43/"
        }, 
        {
            "name": "AA-9 Coruscant freighter", 
            "model": "Botajef AA-9 Freighter-Liner", 
            "manufacturer": "Botajef Shipyards", 
            "cost_in_credits": "unknown", 
            "length": "390", 
            "max_atmosphering_speed": "unknown", 
            "crew": "unknown", 
            "passengers": "30000", 
            "cargo_capacity": "unknown", 
            "consumables": "unknown", 
            "hyperdrive_rating": "unknown", 
            "MGLT": "unknown", 
            "starship_class": "freighter", 
            "pilots": [], 
            "films": [
                "http://swapi.co/api/films/5/"
            ], 
            "created": "2014-12-20T17:24:23.509000Z", 
            "edited": "2014-12-22T17:35:45.135987Z", 
            "url": "http://swapi.co/api/starships/47/"
        }, 
        {
            "name": "Jedi starfighter", 
            "model": "Delta-7 Aethersprite-class interceptor", 
            "manufacturer": "Kuat Systems Engineering", 
            "cost_in_credits": "180000", 
            "length": "8", 
            "max_atmosphering_speed": "1150", 
            "crew": "1", 
            "passengers": "0", 
            "cargo_capacity": "60", 
            "consumables": "7 days", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "unknown", 
            "starship_class": "Starfighter", 
            "pilots": [
                "http://swapi.co/api/people/10/", 
                "http://swapi.co/api/people/58/"
            ], 
            "films": [
                "http://swapi.co/api/films/5/", 
                "http://swapi.co/api/films/6/"
            ], 
            "created": "2014-12-20T17:35:23.906000Z", 
            "edited": "2014-12-22T17:35:45.147746Z", 
            "url": "http://swapi.co/api/starships/48/"
        }
    ]
}`,
    page1Wookiee: `{"oaoohuwhao":37,"whwokao":"acaoaoak://anoooaraanacoocao:9784/caorarccacahakc?wwoorcscraao=ohooooorahwowo&akrarrwo=2","akrcwohoahoohuc":whhuanan,"rcwochuanaoc":[{"whrascwo":"Swowhaoahwhwoan-oaanracc anrawhwaahwhrr oarcrawwao","scoowawoan":"Swowhaoahwhwoan-oaanracc anrawhwaahwhrr oarcrawwao","scrawhhuwwraoaaohurcworc":"Sahwowhrarc Fanwowoao Srocaowoscc, Crowhrrhuc Sakraoawoohoorcorc","oaoocao_ahwh_oarcwowaahaoc":"240000","anwowhrraoac":"38","scrak_raaoscoocakacworcahwhrr_cakwowowa":"1000","oarcwooh":"5","akraccwowhrrworcc":"75","oararcrroo_oaraakraoaahaoro":"180000","oaoowhchuscrarhanwoc":"1 scoowhaoac","acroakworcwarcahhowo_rcraaoahwhrr":"1.0","MGLT":"70","caorarccacahak_oaanracc":"anrawhwaahwhrr oarcrawwao","akahanooaoc":[],"wwahanscc":["acaoaoak://cohraakah.oaoo/raakah/wwahanscc/1/"],"oarcworaaowowa":"2014-12-10T15:48:00.586000Z","wowaahaowowa":"2014-12-22T17:35:44.431407Z","hurcan":"acaoaoak://cohraakah.oaoo/raakah/caorarccacahakc/5/"},{"whrascwo":"Dworaaoac Saorarc","scoowawoan":"DS-1 Orcrhahaoraan Braaoaoanwo Saoraaoahoowh","scrawhhuwwraoaaohurcworc":"Iscakworcahraan Dwoakrarcaoscwowhao ooww Mahanahaorarcro Rwocworarcoaac, Sahwowhrarc Fanwowoao Srocaowoscc","oaoocao_ahwh_oarcwowaahaoc":"1000000000000","anwowhrraoac":"120000","scrak_raaoscoocakacworcahwhrr_cakwowowa":"wh/ra","oarcwooh":"342953","akraccwowhrrworcc":"843342","oararcrroo_oaraakraoaahaoro":"1000000000000","oaoowhchuscrarhanwoc":"3 roworarcc","acroakworcwarcahhowo_rcraaoahwhrr":"4.0","MGLT":"10","caorarccacahak_oaanracc":"Dwowoak Sakraoawo Moorhahanwo Braaoaoanwocaoraaoahoowh","akahanooaoc":[],"wwahanscc":["acaoaoak://cohraakah.oaoo/raakah/wwahanscc/1/"],"oarcworaaowowa":"2014-12-10T16:36:50.509000Z","wowaahaowowa":"2014-12-22T17:35:44.452589Z","hurcan":"acaoaoak://cohraakah.oaoo/raakah/caorarccacahakc/9/"},{"whrascwo":"Mahananwowhwhahhusc Fraanoaoowh","scoowawoan":"YT-1300 anahrracao wwrcwoahrracaoworc","scrawhhuwwraoaaohurcworc":"Coorcwoananahrawh Ewhrrahwhwoworcahwhrr Coorcakoorcraaoahoowh","oaoocao_ahwh_oarcwowaahaoc":"100000","anwowhrraoac":"34.37","scrak_raaoscoocakacworcahwhrr_cakwowowa":"1050","oarcwooh":"4","akraccwowhrrworcc":"6","oararcrroo_oaraakraoaahaoro":"100000","oaoowhchuscrarhanwoc":"2 scoowhaoacc","acroakworcwarcahhowo_rcraaoahwhrr":"0.5","MGLT":"75","caorarccacahak_oaanracc":"Lahrracao wwrcwoahrracaoworc","akahanooaoc":["acaoaoak://cohraakah.oaoo/raakah/akwoooakanwo/13/","acaoaoak://cohraakah.oaoo/raakah/akwoooakanwo/14/","acaoaoak://cohraakah.oaoo/raakah/akwoooakanwo/25/","acaoaoak://cohraakah.oaoo/raakah/akwoooakanwo/31/"],"wwahanscc":["acaoaoak://cohraakah.oaoo/raakah/wwahanscc/7/","acaoaoak://cohraakah.oaoo/raakah/wwahanscc/3/","acaoaoak://cohraakah.oaoo/raakah/wwahanscc/2/","acaoaoak://cohraakah.oaoo/raakah/wwahanscc/1/"],"oarcworaaowowa":"2014-12-10T16:59:45.094000Z","wowaahaowowa":"2014-12-22T17:35:44.464156Z","hurcan":"acaoaoak://cohraakah.oaoo/raakah/caorarccacahakc/10/"},{"whrascwo":"Y-ohahwhrr","scoowawoan":"BTL Y-ohahwhrr","scrawhhuwwraoaaohurcworc":"Koowowhcrarorc Mrawhhuwwraoaaohurcahwhrr","oaoocao_ahwh_oarcwowaahaoc":"134999","anwowhrraoac":"14","scrak_raaoscoocakacworcahwhrr_cakwowowa":"1000orsc","oarcwooh":"2","akraccwowhrrworcc":"0","oararcrroo_oaraakraoaahaoro":"110","oaoowhchuscrarhanwoc":"1 ohwowoor","acroakworcwarcahhowo_rcraaoahwhrr":"1.0","MGLT":"80","caorarccacahak_oaanracc":"raccrahuanao caorarcwwahrracaoworc","akahanooaoc":[],"wwahanscc":["acaoaoak://cohraakah.oaoo/raakah/wwahanscc/3/","acaoaoak://cohraakah.oaoo/raakah/wwahanscc/2/","acaoaoak://cohraakah.oaoo/raakah/wwahanscc/1/"],"oarcworaaowowa":"2014-12-12T11:00:39.817000Z","wowaahaowowa":"2014-12-22T17:35:44.479706Z","hurcan":"acaoaoak://cohraakah.oaoo/raakah/caorarccacahakc/11/"},{"whrascwo":"X-ohahwhrr","scoowawoan":"T-65 X-ohahwhrr","scrawhhuwwraoaaohurcworc":"Iwhoaoosc Coorcakoorcraaoahoowh","oaoocao_ahwh_oarcwowaahaoc":"149999","anwowhrraoac":"12.5","scrak_raaoscoocakacworcahwhrr_cakwowowa":"1050","oarcwooh":"1","akraccwowhrrworcc":"0","oararcrroo_oaraakraoaahaoro":"110","oaoowhchuscrarhanwoc":"1 ohwowoor","acroakworcwarcahhowo_rcraaoahwhrr":"1.0","MGLT":"100","caorarccacahak_oaanracc":"Saorarcwwahrracaoworc","akahanooaoc":["acaoaoak://cohraakah.oaoo/raakah/akwoooakanwo/1/","acaoaoak://cohraakah.oaoo/raakah/akwoooakanwo/9/","acaoaoak://cohraakah.oaoo/raakah/akwoooakanwo/18/","acaoaoak://cohraakah.oaoo/raakah/akwoooakanwo/19/"],"wwahanscc":["acaoaoak://cohraakah.oaoo/raakah/wwahanscc/3/","acaoaoak://cohraakah.oaoo/raakah/wwahanscc/2/","acaoaoak://cohraakah.oaoo/raakah/wwahanscc/1/"],"oarcworaaowowa":"2014-12-12T11:19:05.340000Z","wowaahaowowa":"2014-12-22T17:35:44.491233Z","hurcan":"acaoaoak://cohraakah.oaoo/raakah/caorarccacahakc/12/"},{"whrascwo":"TIE Awahorawhoawowa k1","scoowawoan":"Tohahwh Ioowh Ewhrrahwhwo Awahorawhoawowa k1","scrawhhuwwraoaaohurcworc":"Sahwowhrarc Fanwowoao Srocaowoscc","oaoocao_ahwh_oarcwowaahaoc":"huwhorwhooohwh","anwowhrraoac":"9.2","scrak_raaoscoocakacworcahwhrr_cakwowowa":"1200","oarcwooh":"1","akraccwowhrrworcc":"0","oararcrroo_oaraakraoaahaoro":"150","oaoowhchuscrarhanwoc":"5 wararoc","acroakworcwarcahhowo_rcraaoahwhrr":"1.0","MGLT":"105","caorarccacahak_oaanracc":"Saorarcwwahrracaoworc","akahanooaoc":["acaoaoak://cohraakah.oaoo/raakah/akwoooakanwo/4/"],"wwahanscc":["acaoaoak://cohraakah.oaoo/raakah/wwahanscc/1/"],"oarcworaaowowa":"2014-12-12T11:21:32.991000Z","wowaahaowowa":"2014-12-22T17:35:44.549047Z","hurcan":"acaoaoak://cohraakah.oaoo/raakah/caorarccacahakc/13/"},{"whrascwo":"Ekwooahuaooorc","scoowawoan":"Ekwooahuaooorc-oaanracc caorarc warcworawawhoohurracao","scrawhhuwwraoaaohurcworc":"Khuraao Drcahhowo Yrarcwac, Foowhwaoorc Sacahakrorarcwac","oaoocao_ahwh_oarcwowaahaoc":"1143350000","anwowhrraoac":"19,000","scrak_raaoscoocakacworcahwhrr_cakwowowa":"wh/ra","oarcwooh":"279144","akraccwowhrrworcc":"38000","oararcrroo_oaraakraoaahaoro":"250000000","oaoowhchuscrarhanwoc":"6 roworarcc","acroakworcwarcahhowo_rcraaoahwhrr":"2.0","MGLT":"40","caorarccacahak_oaanracc":"Saorarc warcworawawhoohurracao","akahanooaoc":[],"wwahanscc":["acaoaoak://cohraakah.oaoo/raakah/wwahanscc/3/","acaoaoak://cohraakah.oaoo/raakah/wwahanscc/2/"],"oarcworaaowowa":"2014-12-15T12:31:42.547000Z","wowaahaowowa":"2014-12-22T17:35:44.638231Z","hurcan":"acaoaoak://cohraakah.oaoo/raakah/caorarccacahakc/15/"},{"whrascwo":"Sanrahowo 1","scoowawoan":"Fahrcwocakrcraro-31-oaanracc akraaorcooan rawhwa raaoaoraoaor","scrawhhuwwraoaaohurcworc":"Khuraao Srocaowoscc Ewhrrahwhwoworcahwhrr","oaoocao_ahwh_oarcwowaahaoc":"huwhorwhooohwh","anwowhrraoac":"21.5","scrak_raaoscoocakacworcahwhrr_cakwowowa":"1000","oarcwooh":"1","akraccwowhrrworcc":"6","oararcrroo_oaraakraoaahaoro":"70000","oaoowhchuscrarhanwoc":"1 scoowhaoac","acroakworcwarcahhowo_rcraaoahwhrr":"3.0","MGLT":"70","caorarccacahak_oaanracc":"Praaorcooan oarcrawwao","akahanooaoc":["acaoaoak://cohraakah.oaoo/raakah/akwoooakanwo/22/"],"wwahanscc":["acaoaoak://cohraakah.oaoo/raakah/wwahanscc/5/","acaoaoak://cohraakah.oaoo/raakah/wwahanscc/2/"],"oarcworaaowowa":"2014-12-15T13:00:56.332000Z","wowaahaowowa":"2014-12-22T17:35:44.716273Z","hurcan":"acaoaoak://cohraakah.oaoo/raakah/caorarccacahakc/21/"},{"whrascwo":"Iscakworcahraan cachuaoaoanwo","scoowawoan":"Lrascrhwara-oaanracc T-4ra cachuaoaoanwo","scrawhhuwwraoaaohurcworc":"Sahwowhrarc Fanwowoao Srocaowoscc","oaoocao_ahwh_oarcwowaahaoc":"240000","anwowhrraoac":"20","scrak_raaoscoocakacworcahwhrr_cakwowowa":"850","oarcwooh":"6","akraccwowhrrworcc":"20","oararcrroo_oaraakraoaahaoro":"80000","oaoowhchuscrarhanwoc":"2 scoowhaoacc","acroakworcwarcahhowo_rcraaoahwhrr":"1.0","MGLT":"50","caorarccacahak_oaanracc":"Arcscwowa rroohoworcwhscwowhao aorcrawhcakoorcao","akahanooaoc":["acaoaoak://cohraakah.oaoo/raakah/akwoooakanwo/1/","acaoaoak://cohraakah.oaoo/raakah/akwoooakanwo/13/","acaoaoak://cohraakah.oaoo/raakah/akwoooakanwo/14/"],"wwahanscc":["acaoaoak://cohraakah.oaoo/raakah/wwahanscc/3/","acaoaoak://cohraakah.oaoo/raakah/wwahanscc/2/"],"oarcworaaowowa":"2014-12-15T13:04:47.235000Z","wowaahaowowa":"2014-12-22T17:35:44.795405Z","hurcan":"acaoaoak://cohraakah.oaoo/raakah/caorarccacahakc/22/"},{"whrascwo":"EF76 Nworhhuanoowh-B wocoaoorcao wwrcahrrraaowo","scoowawoan":"EF76 Nworhhuanoowh-B wocoaoorcao wwrcahrrraaowo","scrawhhuwwraoaaohurcworc":"Khuraao Drcahhowo Yrarcwac","oaoocao_ahwh_oarcwowaahaoc":"8500000","anwowhrraoac":"300","scrak_raaoscoocakacworcahwhrr_cakwowowa":"800","oarcwooh":"854","akraccwowhrrworcc":"75","oararcrroo_oaraakraoaahaoro":"6000000","oaoowhchuscrarhanwoc":"2 roworarcc","acroakworcwarcahhowo_rcraaoahwhrr":"2.0","MGLT":"40","caorarccacahak_oaanracc":"Ecoaoorcao cacahak","akahanooaoc":[],"wwahanscc":["acaoaoak://cohraakah.oaoo/raakah/wwahanscc/3/","acaoaoak://cohraakah.oaoo/raakah/wwahanscc/2/"],"oarcworaaowowa":"2014-12-15T13:06:30.813000Z","wowaahaowowa":"2014-12-22T17:35:44.848329Z","hurcan":"acaoaoak://cohraakah.oaoo/raakah/caorarccacahakc/23/"}]}`,
    page2Wookiee: `{"oaoohuwhao":37,"whwokao":"","akrcwohoahoohuc":"acaoaoak://cohraakah.oaoo/raakah/caorarccacahakc/?wwoorcscraao=ohooooorahwowo&akrarrwo=1","rcwochuanaoc":[{"whrascwo":"Craanrascrarcah Crchuahcworc","scoowawoan":"MC80 Lahrhworcaoro aoroakwo Saorarc Crchuahcworc","scrawhhuwwraoaaohurcworc":"Moowh Craanrascrarcah cacahakrorarcwac","oaoocao_ahwh_oarcwowaahaoc":"104000000","anwowhrraoac":"1200","scrak_raaoscoocakacworcahwhrr_cakwowowa":"wh/ra","oarcwooh":"5400","akraccwowhrrworcc":"1200","oararcrroo_oaraakraoaahaoro":"huwhorwhooohwh","oaoowhchuscrarhanwoc":"2 roworarcc","acroakworcwarcahhowo_rcraaoahwhrr":"1.0","MGLT":"60","caorarccacahak_oaanracc":"Saorarc Crchuahcworc","akahanooaoc":[],"wwahanscc":["acaoaoak://cohraakah.oaoo/raakah/wwahanscc/3/"],"oarcworaaowowa":"2014-12-18T10:54:57.804000Z","wowaahaowowa":"2014-12-22T17:35:44.957852Z","hurcan":"acaoaoak://cohraakah.oaoo/raakah/caorarccacahakc/27/"},{"whrascwo":"A-ohahwhrr","scoowawoan":"RZ-1 A-ohahwhrr Iwhaoworcoawoakaooorc","scrawhhuwwraoaaohurcworc":"Aananahrawhoawo Uwhwaworcrrrcoohuwhwa Ewhrrahwhwoworcahwhrr, Iwhoaoosc Coorcakoorcraaoahoowh","oaoocao_ahwh_oarcwowaahaoc":"175000","anwowhrraoac":"9.6","scrak_raaoscoocakacworcahwhrr_cakwowowa":"1300","oarcwooh":"1","akraccwowhrrworcc":"0","oararcrroo_oaraakraoaahaoro":"40","oaoowhchuscrarhanwoc":"1 ohwowoor","acroakworcwarcahhowo_rcraaoahwhrr":"1.0","MGLT":"120","caorarccacahak_oaanracc":"Saorarcwwahrracaoworc","akahanooaoc":["acaoaoak://cohraakah.oaoo/raakah/akwoooakanwo/29/"],"wwahanscc":["acaoaoak://cohraakah.oaoo/raakah/wwahanscc/3/"],"oarcworaaowowa":"2014-12-18T11:16:34.542000Z","wowaahaowowa":"2014-12-22T17:35:44.978754Z","hurcan":"acaoaoak://cohraakah.oaoo/raakah/caorarccacahakc/28/"},{"whrascwo":"B-ohahwhrr","scoowawoan":"A/SF-01 B-ohahwhrr caorarcwwahrracaoworc","scrawhhuwwraoaaohurcworc":"Sanrarowh & Koorcakahan","oaoocao_ahwh_oarcwowaahaoc":"220000","anwowhrraoac":"16.9","scrak_raaoscoocakacworcahwhrr_cakwowowa":"950","oarcwooh":"1","akraccwowhrrworcc":"0","oararcrroo_oaraakraoaahaoro":"45","oaoowhchuscrarhanwoc":"1 ohwowoor","acroakworcwarcahhowo_rcraaoahwhrr":"2.0","MGLT":"91","caorarccacahak_oaanracc":"Accrahuanao Saorarcwwahrracaoworc","akahanooaoc":[],"wwahanscc":["acaoaoak://cohraakah.oaoo/raakah/wwahanscc/3/"],"oarcworaaowowa":"2014-12-18T11:18:04.763000Z","wowaahaowowa":"2014-12-22T17:35:45.011193Z","hurcan":"acaoaoak://cohraakah.oaoo/raakah/caorarccacahakc/29/"},{"whrascwo":"Rwoakhurhanahoa Crchuahcworc","scoowawoan":"Coowhchuanrarc-oaanracc oarchuahcworc","scrawhhuwwraoaaohurcworc":"Coorcwoananahrawh Ewhrrahwhwoworcahwhrr Coorcakoorcraaoahoowh","oaoocao_ahwh_oarcwowaahaoc":"huwhorwhooohwh","anwowhrraoac":"115","scrak_raaoscoocakacworcahwhrr_cakwowowa":"900","oarcwooh":"9","akraccwowhrrworcc":"16","oararcrroo_oaraakraoaahaoro":"huwhorwhooohwh","oaoowhchuscrarhanwoc":"huwhorwhooohwh","acroakworcwarcahhowo_rcraaoahwhrr":"2.0","MGLT":"huwhorwhooohwh","caorarccacahak_oaanracc":"Sakraoawo oarchuahcworc","akahanooaoc":[],"wwahanscc":["acaoaoak://cohraakah.oaoo/raakah/wwahanscc/4/"],"oarcworaaowowa":"2014-12-19T17:01:31.488000Z","wowaahaowowa":"2014-12-22T17:35:45.027308Z","hurcan":"acaoaoak://cohraakah.oaoo/raakah/caorarccacahakc/31/"},{"whrascwo":"Nrarhoooo wwahrracaoworc","scoowawoan":"N-1 caorarcwwahrracaoworc","scrawhhuwwraoaaohurcworc":"Tacwowowa Praanraoawo Sakraoawo Vwoccwoan Ewhrrahwhwoworcahwhrr Coorcakc","oaoocao_ahwh_oarcwowaahaoc":"200000","anwowhrraoac":"11","scrak_raaoscoocakacworcahwhrr_cakwowowa":"1100","oarcwooh":"1","akraccwowhrrworcc":"0","oararcrroo_oaraakraoaahaoro":"65","oaoowhchuscrarhanwoc":"7 wararoc","acroakworcwarcahhowo_rcraaoahwhrr":"1.0","MGLT":"huwhorwhooohwh","caorarccacahak_oaanracc":"Saorarcwwahrracaoworc","akahanooaoc":["acaoaoak://cohraakah.oaoo/raakah/akwoooakanwo/11/","acaoaoak://cohraakah.oaoo/raakah/akwoooakanwo/60/","acaoaoak://cohraakah.oaoo/raakah/akwoooakanwo/35/"],"wwahanscc":["acaoaoak://cohraakah.oaoo/raakah/wwahanscc/5/","acaoaoak://cohraakah.oaoo/raakah/wwahanscc/4/"],"oarcworaaowowa":"2014-12-19T17:39:17.582000Z","wowaahaowowa":"2014-12-22T17:35:45.079452Z","hurcan":"acaoaoak://cohraakah.oaoo/raakah/caorarccacahakc/39/"},{"whrascwo":"Nrarhoooo Roororaan Saorarccacahak","scoowawoan":"J-aoroakwo 327 Nhurhahrawh rcoororaan caorarccacahak","scrawhhuwwraoaaohurcworc":"Tacwowowa Praanraoawo Sakraoawo Vwoccwoan Ewhrrahwhwoworcahwhrr Coorcakc, Nhurhahra Saorarc Drcahhowoc","oaoocao_ahwh_oarcwowaahaoc":"huwhorwhooohwh","anwowhrraoac":"76","scrak_raaoscoocakacworcahwhrr_cakwowowa":"920","oarcwooh":"8","akraccwowhrrworcc":"huwhorwhooohwh","oararcrroo_oaraakraoaahaoro":"huwhorwhooohwh","oaoowhchuscrarhanwoc":"huwhorwhooohwh","acroakworcwarcahhowo_rcraaoahwhrr":"1.8","MGLT":"huwhorwhooohwh","caorarccacahak_oaanracc":"roraoaacao","akahanooaoc":["acaoaoak://cohraakah.oaoo/raakah/akwoooakanwo/39/"],"wwahanscc":["acaoaoak://cohraakah.oaoo/raakah/wwahanscc/4/"],"oarcworaaowowa":"2014-12-19T17:45:03.506000Z","wowaahaowowa":"2014-12-22T17:35:45.091925Z","hurcan":"acaoaoak://cohraakah.oaoo/raakah/caorarccacahakc/40/"},{"whrascwo":"Soaahscahaorarc","scoowawoan":"Saorarc Coohurcahworc","scrawhhuwwraoaaohurcworc":"Rwoakhurhanahoa Sahwowhrarc Srocaowoscc","oaoocao_ahwh_oarcwowaahaoc":"55000000","anwowhrraoac":"26.5","scrak_raaoscoocakacworcahwhrr_cakwowowa":"1180","oarcwooh":"1","akraccwowhrrworcc":"6","oararcrroo_oaraakraoaahaoro":"2500000","oaoowhchuscrarhanwoc":"30 wararoc","acroakworcwarcahhowo_rcraaoahwhrr":"1.5","MGLT":"huwhorwhooohwh","caorarccacahak_oaanracc":"Sakraoawo Trcrawhcakoorcao","akahanooaoc":["acaoaoak://cohraakah.oaoo/raakah/akwoooakanwo/44/"],"wwahanscc":["acaoaoak://cohraakah.oaoo/raakah/wwahanscc/4/"],"oarcworaaowowa":"2014-12-20T09:39:56.116000Z","wowaahaowowa":"2014-12-22T17:35:45.105522Z","hurcan":"acaoaoak://cohraakah.oaoo/raakah/caorarccacahakc/41/"},{"whrascwo":"J-aoroakwo waahakanooscraaoahoa rhrarcrrwo","scoowawoan":"J-aoroakwo waahakanooscraaoahoa rhrarcrrwo","scrawhhuwwraoaaohurcworc":"Tacwowowa Praanraoawo Sakraoawo Vwoccwoan Ewhrrahwhwoworcahwhrr Coorcakc, Nhurhahra Saorarc Drcahhowoc","oaoocao_ahwh_oarcwowaahaoc":"2000000","anwowhrraoac":"39","scrak_raaoscoocakacworcahwhrr_cakwowowa":"2000","oarcwooh":"5","akraccwowhrrworcc":"10","oararcrroo_oaraakraoaahaoro":"huwhorwhooohwh","oaoowhchuscrarhanwoc":"1 roworarc","acroakworcwarcahhowo_rcraaoahwhrr":"0.7","MGLT":"huwhorwhooohwh","caorarccacahak_oaanracc":"Dahakanooscraaoahoa rhrarcrrwo","akahanooaoc":[],"wwahanscc":["acaoaoak://cohraakah.oaoo/raakah/wwahanscc/5/"],"oarcworaaowowa":"2014-12-20T11:05:51.237000Z","wowaahaowowa":"2014-12-22T17:35:45.124386Z","hurcan":"acaoaoak://cohraakah.oaoo/raakah/caorarccacahakc/43/"},{"whrascwo":"AA-9 Coorchucoarawhao wwrcwoahrracaoworc","scoowawoan":"Booaorashwoww AA-9 Frcwoahrracaoworc-Lahwhworc","scrawhhuwwraoaaohurcworc":"Booaorashwoww Sacahakrorarcwac","oaoocao_ahwh_oarcwowaahaoc":"huwhorwhooohwh","anwowhrraoac":"390","scrak_raaoscoocakacworcahwhrr_cakwowowa":"huwhorwhooohwh","oarcwooh":"huwhorwhooohwh","akraccwowhrrworcc":"30000","oararcrroo_oaraakraoaahaoro":"huwhorwhooohwh","oaoowhchuscrarhanwoc":"huwhorwhooohwh","acroakworcwarcahhowo_rcraaoahwhrr":"huwhorwhooohwh","MGLT":"huwhorwhooohwh","caorarccacahak_oaanracc":"wwrcwoahrracaoworc","akahanooaoc":[],"wwahanscc":["acaoaoak://cohraakah.oaoo/raakah/wwahanscc/5/"],"oarcworaaowowa":"2014-12-20T17:24:23.509000Z","wowaahaowowa":"2014-12-22T17:35:45.135987Z","hurcan":"acaoaoak://cohraakah.oaoo/raakah/caorarccacahakc/47/"},{"whrascwo":"Jwowaah caorarcwwahrracaoworc","scoowawoan":"Dwoanaora-7 Awoaoacworccakrcahaowo-oaanracc ahwhaoworcoawoakaooorc","scrawhhuwwraoaaohurcworc":"Khuraao Srocaowoscc Ewhrrahwhwoworcahwhrr","oaoocao_ahwh_oarcwowaahaoc":"180000","anwowhrraoac":"8","scrak_raaoscoocakacworcahwhrr_cakwowowa":"1150","oarcwooh":"1","akraccwowhrrworcc":"0","oararcrroo_oaraakraoaahaoro":"60","oaoowhchuscrarhanwoc":"7 wararoc","acroakworcwarcahhowo_rcraaoahwhrr":"1.0","MGLT":"huwhorwhooohwh","caorarccacahak_oaanracc":"Saorarcwwahrracaoworc","akahanooaoc":["acaoaoak://cohraakah.oaoo/raakah/akwoooakanwo/10/","acaoaoak://cohraakah.oaoo/raakah/akwoooakanwo/58/"],"wwahanscc":["acaoaoak://cohraakah.oaoo/raakah/wwahanscc/5/","acaoaoak://cohraakah.oaoo/raakah/wwahanscc/6/"],"oarcworaaowowa":"2014-12-20T17:35:23.906000Z","wowaahaowowa":"2014-12-22T17:35:45.147746Z","hurcan":"acaoaoak://cohraakah.oaoo/raakah/caorarccacahakc/48/"}]}`,
};

module.exports = {
    starships: starships
};