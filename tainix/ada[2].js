const tweets = ['39930;DigitalMarketingMaestro,ArtGoddess,ArtisticAce,PixelPerformer,FunLovingDesignerGirl', '22699;ArtisticNinja,FunLovingArtist,ArtisticAce,DigitalInnovator,DigitalMarketingMaestro', '12681;PixelPoet,PopCultureExplorer,PopCulturePioneer,MangaMaven', '15146;PopCultureGuru,ArtisticNinja,ArtGoddess,ArtisticSamurai', '40243;PopCulturePioneer,FunLovingDesignerGirl', '29912;ArtisticAce,ArtisticNinja,FunLovingDesignerGirl,DigitalInnovator', '33799;DigitalInnovator,PopCultureCritic,PopCultureGuru,PopCultureScribe', '28748;PopCultureCritic,FunLovingDesignerGirl,DigitalMarketingMaestro', '26633;PopCultureGuru,PixelPoet', '28578;ArtGoddess,PopCultureCritic,FunLovingArtist,PopCultureScribe,ArtisticJunkie', '22320;FunLovingDesignerGirl,FunLovingArtist', '40076;FunLovingArtist,MangaMaven,FunLovingDesignerGirl', '35287;PopCulturePioneer,MangaMadness,PixelPerformer,PopCultureExplorer', '38293;MangaMadness,FunLovingArtisan,PopCultureGuru,DigitalInnovator,PopCulturePioneer', '5856;PopCultureGuru,FunLovingArtist,ArtGoddess,MangaMadness', '25297;ArtisticJunkie,PixelPoet,ArtisticAce,ArtGoddess', '14384;PopCultureExplorer,ArtGoddess,MangaMadness', '22294;ArtisticJunkie,FunLovingDesignerGirl,DigitalInnovator,MangaMadness', '26856;MangaMaven,PopCultureCritic,PixelPerformer,MangaMadness', '9325;ArtGoddess,FunLovingArtisan', '10686;MangaMadness,DigitalMarketingMaestro,PopCultureCritic,PopCultureFanatic,PixelPoet', '48694;FunLovingArtisan,FunLovingDesignerGirl', '48203;ArtisticAce,PopCultureCritic', '26144;DigitalInnovator,PopCultureFanatic,PixelPoet,PixelPerformer', '9826;FunLovingDesignerGirl,PixelPerformer,PopCultureCritic', '47553;PopCultureGuru,FunLovingArtist,MangaMadness,ArtisticJunkie', '6947;ArtisticJunkie,FunLovingArtisan,ArtGoddess,MangaMadness,PixelPerformer', '28936;ArtisticSamurai,PopCulturePioneer,PopCultureFanatic,MangaMadness,DigitalMarketingMaestro', '35068;FunLovingArtist,ArtisticJunkie,PopCultureGuru,PopCultureFanatic', '43140;FunLovingArtist,ArtisticJunkie', '40653;PopCultureCritic,DigitalInnovator,ArtisticJunkie,FunLovingArtisan', '19659;PopCultureFanatic,ArtisticNinja', '2397;ArtisticJunkie,PopCultureFanatic,DigitalInnovator', '47326;MangaMaven,FunLovingArtisan,DigitalMarketingMaestro,ArtGoddess,PixelPoet', '4391;ArtisticAce,PopCultureExplorer,ArtGoddess,PixelPerformer,DigitalMarketingMaestro', '12245;ArtisticJunkie,ArtisticSamurai', '45397;DigitalMarketingMaestro,ArtGoddess', '34097;PopCultureExplorer,PixelPerformer', '9151;PopCultureExplorer,PopCultureFanatic,ArtisticJunkie', '9315;PopCultureFanatic,ArtisticJunkie', '8225;MangaMadness,DigitalMarketingMaestro', '39964;PixelPoet,ArtGoddess', '15917;FunLovingArtisan,PopCultureFanatic', '41432;FunLovingArtist,DigitalMarketingMaestro', '46644;MangaMaven,FunLovingArtist,FunLovingDesignerGirl', '32732;ArtisticJunkie,PopCultureScribe', '4987;PopCultureFanatic,DigitalMarketingMaestro', '30642;FunLovingDesignerGirl,FunLovingArtist', '11455;MangaMadness,ArtisticAce', '22880;PopCultureExplorer,FunLovingDesignerGirl,PopCultureGuru,PopCultureCritic', '20135;ArtisticJunkie,ArtisticNinja,MangaMaven,PopCultureExplorer,PixelPerformer', '22705;PopCultureExplorer,FunLovingArtist,ArtisticJunkie,PopCultureFanatic,PopCultureCritic', '29895;MangaMadness,PopCulturePioneer,FunLovingArtisan', '14739;MangaMadness,ArtGoddess,ArtisticJunkie', '1492;PopCultureExplorer,PopCultureCritic', '4145;FunLovingDesignerGirl,ArtGoddess,PopCultureGuru,PopCultureExplorer', '4030;PopCultureCritic,MangaMadness,FunLovingArtisan,ArtisticSamurai,DigitalInnovator', '49405;ArtisticJunkie,ArtisticSamurai,DigitalInnovator', '27005;ArtisticSamurai,FunLovingDesignerGirl,PopCultureFanatic', '34419;ArtGoddess,ArtisticSamurai,FunLovingDesignerGirl,MangaMaven', '39686;MangaMaven,PopCulturePioneer', '22051;ArtisticNinja,MangaMaven,PixelPerformer,ArtGoddess', '19967;MangaMadness,DigitalMarketingMaestro,FunLovingArtist,PopCultureGuru', '28606;PopCultureCritic,PopCultureScribe,ArtisticNinja', '14803;PopCultureGuru,ArtisticJunkie,PopCultureExplorer,ArtisticNinja'];

function max_views_artiste(tweets) {
    let artistes_total_views = {}

    for (let tweet of tweets) {
        let views_teweet = tweet.split(";")[0]
        let artistes_views = tweet.split(";")[1].split(",");
        for (let artiste_view_tweet of artistes_views) {
            if (artistes_total_views[artiste_view_tweet]) {
                artistes_total_views[artiste_view_tweet] += parseInt(views_teweet)
            } else {
                artistes_total_views[artiste_view_tweet] = parseInt(views_teweet)
            }
        }
    }

    let max_views = 0
    let artiste_max_views = ""
    for (let artiste_and_views in artistes_total_views) {
        console.log(artistes_total_views[artiste_and_views]);

        if (max_views < artistes_total_views[artiste_and_views]) {
            max_views = artistes_total_views[artiste_and_views]
            artiste_max_views = artiste_and_views
        }
    }
    return artiste_max_views + ":" + max_views
}

console.log(max_views_artiste(tweets));