// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
   return Math.abs(42-someValue);
   }
    
function distanceFromHqInFeet(someValue)  { 
    return 264 * distanceFromHqInBlocks(someValue);
}

function distanceTravelledInFeet(start, destination){ 
    return (Math.abs(start-destination) * 264);
 }
   
/*
function calculatesFarePrice(start, destination) { 
    let totalFeet = distanceTravelledInFeet(start, destination)
        if( totalFeet < 400) {
            return 0;
        }
            else if (totalFeet >= 400 && totalFeet<= 2000) {
                return  (totalFeet-400) *.02 ;
            }
                else if (totalFeet > 2000 && totalFeet < 2500) {
                    return 25;
                }
                    else {
                        return 'cannot travel that far';
                    }
  }
    */
  function calculatesFarePrice(start, destination) { 
    let totalFeet = distanceTravelledInFeet(start, destination)
   
        switch (true){
           case totalFeet < 400: return 0;
           break;
        
            case totalFeet >= 400 && totalFeet<= 2000 : return  (totalFeet-400) *.02 ;
            break;
            
            case totalFeet > 2000 && totalFeet< 2500 :return 25;
            break;

            default : return 'cannot travel that far';
        }
    }