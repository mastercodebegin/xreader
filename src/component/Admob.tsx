
import admob, { MaxAdContentRating, BannerAd, TestIds, BannerAdSize, InterstitialAd, RewardedAd, AdEventType, RewardedAdEventType } from '@react-native-firebase/admob';
export const interstitialAd = InterstitialAd.createForAdRequest("ca-app-pub-3940256099942544/1033173712");

export const rewardInterstitialAd = RewardedAd.createForAdRequest("ca-app-pub-3940256099942544/5224354917");

export const InitialListner=async()=>{
    // messaging()
    //   .getInitialNotification()
    //   .then(remoteMessage => {
    //     if (remoteMessage) {
    //       console.log(
    //         'Notification caused app to open from quit state:',
    //         remoteMessage.notification,
    //       );
    //       // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
    //     }
    //     // setLoading(false);
    //   });
      admob()
      .setRequestConfiguration({
        // Update all future requests suitable for parental guidance
        maxAdContentRating: MaxAdContentRating.PG,
        // Indicates that you want your content treated as child-directed for purposes of COPPA.
        tagForChildDirectedTreatment: true,
        // Indicates that you want the ad request to be handled in a
        // manner suitable for users under the age of consent.
        tagForUnderAgeOfConsent: true,
      })
      .then(() => {
        // Request config successfully set!
      });
 
  }
