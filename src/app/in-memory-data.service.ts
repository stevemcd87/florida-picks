import {InMemoryDbService} from 'angular-in-memory-web-api';
import {UserLotto, LottoGame, AverageWinnings, BoxWay} from './lotto';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const LOTTOGAMES : LottoGame[] = [
      {
        name: 'Pick 2',
        valueName: 'pick2',
        lotteryLength: 2,
        maxNumber: 9,
        averageWinnings: 
          {
            straight: 25,
            box: [
              {
                boxWay: '2 ways',
                winnings: 12.5
              }
            ]
          }
        ,
        winningHistory: [
          {
            date: '12/20/17',
            time: ' E',
            winningNumber: [5, 7]
          }, {
            date: '11/25/17',
            time: ' E',
            winningNumber: [2, 2]
          }, {
            date: '10/31/17',
            time: ' E',
            winningNumber: [5, 3]
          }, {
            date: '10/06/17',
            time: ' E',
            winningNumber: [6, 6]
          }, {
            date: '12/20/17',
            time: ' M',
            winningNumber: [4, 3]
          }, {
            date: '11/25/17',
            time: ' M',
            winningNumber: [4, 8]
          }, {
            date: '10/31/17',
            time: ' M',
            winningNumber: [0, 7]
          }, {
            date: '10/06/17',
            time: ' M',
            winningNumber: [4, 9]
          }, {
            date: '12/19/17',
            time: ' E',
            winningNumber: [9, 3]
          }, {
            date: '11/24/17',
            time: ' E',
            winningNumber: [8, 3]
          }, {
            date: '10/30/17',
            time: ' E',
            winningNumber: [2, 5]
          }, {
            date: '10/05/17',
            time: ' E',
            winningNumber: [8, 7]
          }, {
            date: '12/19/17',
            time: ' M',
            winningNumber: [0, 7]
          }, {
            date: '11/24/17',
            time: ' M',
            winningNumber: [5, 1]
          }, {
            date: '10/30/17',
            time: ' M',
            winningNumber: [6, 0]
          }, {
            date: '10/05/17',
            time: ' M',
            winningNumber: [4, 0]
          }, {
            date: '12/18/17',
            time: ' E',
            winningNumber: [1, 3]
          }, {
            date: '11/23/17',
            time: ' E',
            winningNumber: [1, 6]
          }, {
            date: '10/29/17',
            time: ' E',
            winningNumber: [5, 5]
          }, {
            date: '10/04/17',
            time: ' E',
            winningNumber: [1, 7]
          }, {
            date: '12/18/17',
            time: ' M',
            winningNumber: [1, 1]
          }, {
            date: '11/23/17',
            time: ' M',
            winningNumber: [6, 7]
          }, {
            date: '10/29/17',
            time: ' M',
            winningNumber: [6, 2]
          }, {
            date: '10/04/17',
            time: ' M',
            winningNumber: [3, 0]
          }, {
            date: '12/17/17',
            time: ' E',
            winningNumber: [6, 2]
          }, {
            date: '11/22/17',
            time: ' E',
            winningNumber: [1, 8]
          }, {
            date: '10/28/17',
            time: ' E',
            winningNumber: [4, 4]
          }, {
            date: '10/03/17',
            time: ' E',
            winningNumber: [9, 2]
          }, {
            date: '12/17/17',
            time: ' M',
            winningNumber: [6, 5]
          }, {
            date: '11/22/17',
            time: ' M',
            winningNumber: [7, 6]
          }, {
            date: '10/28/17',
            time: ' M',
            winningNumber: [0, 6]
          }, {
            date: '10/03/17',
            time: ' M',
            winningNumber: [0, 1]
          }, {
            date: '12/16/17',
            time: ' E',
            winningNumber: [3, 3]
          }, {
            date: '11/21/17',
            time: ' E',
            winningNumber: [1, 3]
          }, {
            date: '10/27/17',
            time: ' E',
            winningNumber: [8, 6]
          }, {
            date: '10/02/17',
            time: ' E',
            winningNumber: [1, 8]
          }, {
            date: '12/16/17',
            time: ' M',
            winningNumber: [1, 7]
          }, {
            date: '11/21/17',
            time: ' M',
            winningNumber: [4, 7]
          }, {
            date: '10/27/17',
            time: ' M',
            winningNumber: [3, 6]
          }, {
            date: '10/02/17',
            time: ' M',
            winningNumber: [6, 3]
          }, {
            date: '12/15/17',
            time: ' E',
            winningNumber: [1, 2]
          }, {
            date: '11/20/17',
            time: ' E',
            winningNumber: [7, 8]
          }, {
            date: '10/26/17',
            time: ' E',
            winningNumber: [0, 5]
          }, {
            date: '10/01/17',
            time: ' E',
            winningNumber: [9, 3]
          }, {
            date: '12/15/17',
            time: ' M',
            winningNumber: [0, 1]
          }, {
            date: '11/20/17',
            time: ' M',
            winningNumber: [7, 3]
          }, {
            date: '10/26/17',
            time: ' M',
            winningNumber: [6, 4]
          }, {
            date: '10/01/17',
            time: ' M',
            winningNumber: [8, 7]
          }, {
            date: '12/14/17',
            time: ' E',
            winningNumber: [3, 7]
          }, {
            date: '11/19/17',
            time: ' E',
            winningNumber: [9, 2]
          }, {
            date: '10/25/17',
            time: ' E',
            winningNumber: [8, 8]
          }, {
            date: '09/30/17',
            time: ' E',
            winningNumber: [9, 6]
          }, {
            date: '12/14/17',
            time: ' M',
            winningNumber: [9, 7]
          }, {
            date: '11/19/17',
            time: ' M',
            winningNumber: [9, 0]
          }, {
            date: '10/25/17',
            time: ' M',
            winningNumber: [6, 6]
          }, {
            date: '09/30/17',
            time: ' M',
            winningNumber: [3, 4]
          }, {
            date: '12/13/17',
            time: ' E',
            winningNumber: [5, 7]
          }, {
            date: '11/18/17',
            time: ' E',
            winningNumber: [6, 2]
          }, {
            date: '10/24/17',
            time: ' E',
            winningNumber: [2, 3]
          }, {
            date: '09/29/17',
            time: ' E',
            winningNumber: [3, 3]
          }, {
            date: '12/13/17',
            time: ' M',
            winningNumber: [5, 3]
          }, {
            date: '11/18/17',
            time: ' M',
            winningNumber: [0, 6]
          }, {
            date: '10/24/17',
            time: ' M',
            winningNumber: [5, 5]
          }, {
            date: '09/29/17',
            time: ' M',
            winningNumber: [3, 3]
          }, {
            date: '12/12/17',
            time: ' E',
            winningNumber: [8, 5]
          }, {
            date: '11/17/17',
            time: ' E',
            winningNumber: [4, 8]
          }, {
            date: '10/23/17',
            time: ' E',
            winningNumber: [2, 6]
          }, {
            date: '09/28/17',
            time: ' E',
            winningNumber: [4, 3]
          }, {
            date: '12/12/17',
            time: ' M',
            winningNumber: [9, 0]
          }, {
            date: '11/17/17',
            time: ' M',
            winningNumber: [1, 5]
          }, {
            date: '10/23/17',
            time: ' M',
            winningNumber: [1, 9]
          }, {
            date: '09/28/17',
            time: ' M',
            winningNumber: [2, 4]
          }, {
            date: '12/11/17',
            time: ' E',
            winningNumber: [5, 2]
          }, {
            date: '11/16/17',
            time: ' E',
            winningNumber: [5, 5]
          }, {
            date: '10/22/17',
            time: ' E',
            winningNumber: [0, 5]
          }, {
            date: '09/27/17',
            time: ' E',
            winningNumber: [3, 2]
          }, {
            date: '12/11/17',
            time: ' M',
            winningNumber: [3, 2]
          }, {
            date: '11/16/17',
            time: ' M',
            winningNumber: [3, 9]
          }, {
            date: '10/22/17',
            time: ' M',
            winningNumber: [5, 7]
          }, {
            date: '09/27/17',
            time: ' M',
            winningNumber: [2, 6]
          }, {
            date: '12/10/17',
            time: ' E',
            winningNumber: [0, 0]
          }, {
            date: '11/15/17',
            time: ' E',
            winningNumber: [3, 2]
          }, {
            date: '10/21/17',
            time: ' E',
            winningNumber: [8, 8]
          }, {
            date: '09/26/17',
            time: ' E',
            winningNumber: [3, 2]
          }, {
            date: '12/10/17',
            time: ' M',
            winningNumber: [3, 1]
          }, {
            date: '11/15/17',
            time: ' M',
            winningNumber: [8, 9]
          }, {
            date: '10/21/17',
            time: ' M',
            winningNumber: [9, 1]
          }, {
            date: '09/26/17',
            time: ' M',
            winningNumber: [3, 0]
          }, {
            date: '12/09/17',
            time: ' E',
            winningNumber: [0, 7]
          }, {
            date: '11/14/17',
            time: ' E',
            winningNumber: [6, 1]
          }, {
            date: '10/20/17',
            time: ' E',
            winningNumber: [4, 3]
          }, {
            date: '09/25/17',
            time: ' E',
            winningNumber: [6, 5]
          }, {
            date: '12/09/17',
            time: ' M',
            winningNumber: [3, 6]
          }, {
            date: '11/14/17',
            time: ' M',
            winningNumber: [7, 9]
          }, {
            date: '10/20/17',
            time: ' M',
            winningNumber: [8, 3]
          }, {
            date: '09/25/17',
            time: ' M',
            winningNumber: [1, 7]
          }, {
            date: '12/08/17',
            time: ' E',
            winningNumber: [5, 5]
          }, {
            date: '11/13/17',
            time: ' E',
            winningNumber: [3, 7]
          }, {
            date: '10/19/17',
            time: ' E',
            winningNumber: [5, 2]
          }, {
            date: '09/24/17',
            time: ' E',
            winningNumber: [2, 6]
          }, {
            date: '12/08/17',
            time: ' M',
            winningNumber: [4, 1]
          }, {
            date: '11/13/17',
            time: ' M',
            winningNumber: [8, 8]
          }, {
            date: '10/19/17',
            time: ' M',
            winningNumber: [5, 6]
          }, {
            date: '09/24/17',
            time: ' M',
            winningNumber: [6, 3]
          }, {
            date: '12/07/17',
            time: ' E',
            winningNumber: [9, 8]
          }, {
            date: '11/12/17',
            time: ' E',
            winningNumber: [3, 8]
          }, {
            date: '10/18/17',
            time: ' E',
            winningNumber: [1, 0]
          }, {
            date: '09/23/17',
            time: ' E',
            winningNumber: [3, 7]
          }, {
            date: '12/07/17',
            time: ' M',
            winningNumber: [3, 7]
          }, {
            date: '11/12/17',
            time: ' M',
            winningNumber: [4, 7]
          }, {
            date: '10/18/17',
            time: ' M',
            winningNumber: [1, 3]
          }, {
            date: '09/23/17',
            time: ' M',
            winningNumber: [3, 0]
          }, {
            date: '12/06/17',
            time: ' E',
            winningNumber: [6, 5]
          }, {
            date: '11/11/17',
            time: ' E',
            winningNumber: [9, 8]
          }, {
            date: '10/17/17',
            time: ' E',
            winningNumber: [9, 4]
          }, {
            date: '09/22/17',
            time: ' E',
            winningNumber: [0, 1]
          }, {
            date: '12/06/17',
            time: ' M',
            winningNumber: [8, 0]
          }, {
            date: '11/11/17',
            time: ' M',
            winningNumber: [3, 0]
          }, {
            date: '10/17/17',
            time: ' M',
            winningNumber: [7, 9]
          }, {
            date: '09/22/17',
            time: ' M',
            winningNumber: [5, 2]
          }, {
            date: '12/05/17',
            time: ' E',
            winningNumber: [7, 5]
          }, {
            date: '11/10/17',
            time: ' E',
            winningNumber: [2, 3]
          }, {
            date: '10/16/17',
            time: ' E',
            winningNumber: [8, 4]
          }, {
            date: '09/21/17',
            time: ' E',
            winningNumber: [4, 9]
          }, {
            date: '12/05/17',
            time: ' M',
            winningNumber: [5, 8]
          }, {
            date: '11/10/17',
            time: ' M',
            winningNumber: [7, 1]
          }, {
            date: '10/16/17',
            time: ' M',
            winningNumber: [7, 1]
          }, {
            date: '09/21/17',
            time: ' M',
            winningNumber: [2, 1]
          }, {
            date: '12/04/17',
            time: ' E',
            winningNumber: [8, 7]
          }, {
            date: '11/09/17',
            time: ' E',
            winningNumber: [4, 3]
          }, {
            date: '10/15/17',
            time: ' E',
            winningNumber: [6, 0]
          }, {
            date: '09/20/17',
            time: ' E',
            winningNumber: [8, 9]
          }, {
            date: '12/04/17',
            time: ' M',
            winningNumber: [5, 3]
          }, {
            date: '11/09/17',
            time: ' M',
            winningNumber: [5, 0]
          }, {
            date: '10/15/17',
            time: ' M',
            winningNumber: [8, 0]
          }, {
            date: '09/20/17',
            time: ' M',
            winningNumber: [1, 6]
          }, {
            date: '12/03/17',
            time: ' E',
            winningNumber: [3, 8]
          }, {
            date: '11/08/17',
            time: ' E',
            winningNumber: [2, 5]
          }, {
            date: '10/14/17',
            time: ' E',
            winningNumber: [0, 1]
          }, {
            date: '09/19/17',
            time: ' E',
            winningNumber: [5, 6]
          }, {
            date: '12/03/17',
            time: ' M',
            winningNumber: [3, 9]
          }, {
            date: '11/08/17',
            time: ' M',
            winningNumber: [1, 1]
          }, {
            date: '10/14/17',
            time: ' M',
            winningNumber: [8, 2]
          }, {
            date: '09/19/17',
            time: ' M',
            winningNumber: [8, 8]
          }, {
            date: '12/02/17',
            time: ' E',
            winningNumber: [1, 0]
          }, {
            date: '11/07/17',
            time: ' E',
            winningNumber: [4, 5]
          }, {
            date: '10/13/17',
            time: ' E',
            winningNumber: [2, 5]
          }, {
            date: '09/18/17',
            time: ' E',
            winningNumber: [1, 3]
          }, {
            date: '12/02/17',
            time: ' M',
            winningNumber: [1, 9]
          }, {
            date: '11/07/17',
            time: ' M',
            winningNumber: [4, 5]
          }, {
            date: '10/13/17',
            time: ' M',
            winningNumber: [6, 2]
          }, {
            date: '09/18/17',
            time: ' M',
            winningNumber: [2, 1]
          }, {
            date: '12/01/17',
            time: ' E',
            winningNumber: [0, 7]
          }, {
            date: '11/06/17',
            time: ' E',
            winningNumber: [2, 8]
          }, {
            date: '10/12/17',
            time: ' E',
            winningNumber: [4, 4]
          }, {
            date: '09/17/17',
            time: ' E',
            winningNumber: [0, 1]
          }, {
            date: '12/01/17',
            time: ' M',
            winningNumber: [0, 5]
          }, {
            date: '11/06/17',
            time: ' M',
            winningNumber: [7, 6]
          }, {
            date: '10/12/17',
            time: ' M',
            winningNumber: [0, 5]
          }, {
            date: '09/17/17',
            time: ' M',
            winningNumber: [4, 4]
          }, {
            date: '11/30/17',
            time: ' E',
            winningNumber: [8, 1]
          }, {
            date: '11/05/17',
            time: ' E',
            winningNumber: [8, 9]
          }, {
            date: '10/11/17',
            time: ' E',
            winningNumber: [2, 3]
          }, {
            date: '09/16/17',
            time: ' E',
            winningNumber: [1, 3]
          }, {
            date: '11/30/17',
            time: ' M',
            winningNumber: [5, 9]
          }, {
            date: '11/05/17',
            time: ' M',
            winningNumber: [8, 7]
          }, {
            date: '10/11/17',
            time: ' M',
            winningNumber: [3, 4]
          }, {
            date: '09/16/17',
            time: ' M',
            winningNumber: [7, 4]
          }, {
            date: '11/29/17',
            time: ' E',
            winningNumber: [5, 3]
          }, {
            date: '11/04/17',
            time: ' E',
            winningNumber: [2, 4]
          }, {
            date: '10/10/17',
            time: ' E',
            winningNumber: [9, 2]
          }, {
            date: '09/15/17',
            time: ' E',
            winningNumber: [7, 4]
          }, {
            date: '11/29/17',
            time: ' M',
            winningNumber: [2, 9]
          }, {
            date: '11/04/17',
            time: ' M',
            winningNumber: [1, 2]
          }, {
            date: '10/10/17',
            time: ' M',
            winningNumber: [6, 0]
          }, {
            date: '09/15/17',
            time: ' M',
            winningNumber: [1, 8]
          }, {
            date: '11/28/17',
            time: ' E',
            winningNumber: [6, 6]
          }, {
            date: '11/03/17',
            time: ' E',
            winningNumber: [9, 9]
          }, {
            date: '10/09/17',
            time: ' E',
            winningNumber: [9, 0]
          }, {
            date: '09/14/17',
            time: ' E',
            winningNumber: [1, 5]
          }, {
            date: '11/28/17',
            time: ' M',
            winningNumber: [3, 1]
          }, {
            date: '11/03/17',
            time: ' M',
            winningNumber: [5, 6]
          }, {
            date: '10/09/17',
            time: ' M',
            winningNumber: [9, 1]
          }, {
            date: '09/14/17',
            time: ' M',
            winningNumber: [6, 4]
          }, {
            date: '11/27/17',
            time: ' E',
            winningNumber: [1, 2]
          }, {
            date: '11/02/17',
            time: ' E',
            winningNumber: [0, 4]
          }, {
            date: '10/08/17',
            time: ' E',
            winningNumber: [4, 0]
          }, {
            date: '09/13/17',
            time: ' E',
            winningNumber: [7, 3]
          }, {
            date: '11/27/17',
            time: ' M',
            winningNumber: [5, 3]
          }, {
            date: '11/02/17',
            time: ' M',
            winningNumber: [9, 5]
          }, {
            date: '10/08/17',
            time: ' M',
            winningNumber: [8, 5]
          }, {
            date: '09/13/17',
            time: ' M',
            winningNumber: [8, 0]
          }, {
            date: '11/26/17',
            time: ' E',
            winningNumber: [0, 0]
          }, {
            date: '11/01/17',
            time: ' E',
            winningNumber: [1, 9]
          }, {
            date: '10/07/17',
            time: ' E',
            winningNumber: [4, 5]
          }, {
            date: '09/12/17',
            time: ' E',
            winningNumber: [9, 3]
          }, {
            date: '11/26/17',
            time: ' M',
            winningNumber: [0, 9]
          }, {
            date: '11/01/17',
            time: ' M',
            winningNumber: [1, 2]
          }, {
            date: '10/07/17',
            time: ' M',
            winningNumber: [9, 0]
          }, {
            date: '09/12/17',
            time: ' M',
            winningNumber: [1, 6]
          }, {
            date: '09/11/17',
            time: ' E',
            winningNumber: [2, 9]
          }, {
            date: '08/17/17',
            time: ' E',
            winningNumber: [3, 5]
          }, {
            date: '07/23/17',
            time: ' E',
            winningNumber: [7, 3]
          }, {
            date: '06/28/17',
            time: ' E',
            winningNumber: [9, 9]
          }, {
            date: '09/11/17',
            time: ' M',
            winningNumber: [8, 5]
          }, {
            date: '08/17/17',
            time: ' M',
            winningNumber: [2, 2]
          }, {
            date: '07/23/17',
            time: ' M',
            winningNumber: [0, 6]
          }, {
            date: '06/28/17',
            time: ' M',
            winningNumber: [1, 5]
          }, {
            date: '09/10/17',
            time: ' E',
            winningNumber: [6, 6]
          }, {
            date: '08/16/17',
            time: ' E',
            winningNumber: [6, 7]
          }, {
            date: '07/22/17',
            time: ' E',
            winningNumber: [0, 2]
          }, {
            date: '06/27/17',
            time: ' E',
            winningNumber: [5, 0]
          }, {
            date: '09/10/17',
            time: ' M',
            winningNumber: [8, 8]
          }, {
            date: '08/16/17',
            time: ' M',
            winningNumber: [6, 4]
          }, {
            date: '07/22/17',
            time: ' M',
            winningNumber: [9, 3]
          }, {
            date: '06/27/17',
            time: ' M',
            winningNumber: [7, 1]
          }, {
            date: '09/09/17',
            time: ' E',
            winningNumber: [4, 3]
          }, {
            date: '08/15/17',
            time: ' E',
            winningNumber: [2, 3]
          }, {
            date: '07/21/17',
            time: ' E',
            winningNumber: [2, 5]
          }, {
            date: '06/26/17',
            time: ' E',
            winningNumber: [3, 6]
          }, {
            date: '09/09/17',
            time: ' M',
            winningNumber: [4, 1]
          }, {
            date: '08/15/17',
            time: ' M',
            winningNumber: [7, 4]
          }, {
            date: '07/21/17',
            time: ' M',
            winningNumber: [7, 6]
          }, {
            date: '06/26/17',
            time: ' M',
            winningNumber: [0, 8]
          }, {
            date: '09/08/17',
            time: ' E',
            winningNumber: [5, 7]
          }, {
            date: '08/14/17',
            time: ' E',
            winningNumber: [4, 2]
          }, {
            date: '07/20/17',
            time: ' E',
            winningNumber: [4, 2]
          }, {
            date: '06/25/17',
            time: ' E',
            winningNumber: [1, 7]
          }, {
            date: '09/08/17',
            time: ' M',
            winningNumber: [9, 4]
          }, {
            date: '08/14/17',
            time: ' M',
            winningNumber: [6, 5]
          }, {
            date: '07/20/17',
            time: ' M',
            winningNumber: [3, 4]
          }, {
            date: '06/25/17',
            time: ' M',
            winningNumber: [6, 7]
          }, {
            date: '09/07/17',
            time: ' E',
            winningNumber: [4, 1]
          }, {
            date: '08/13/17',
            time: ' E',
            winningNumber: [6, 3]
          }, {
            date: '07/19/17',
            time: ' E',
            winningNumber: [3, 6]
          }, {
            date: '06/24/17',
            time: ' E',
            winningNumber: [5, 2]
          }, {
            date: '09/07/17',
            time: ' M',
            winningNumber: [8, 5]
          }, {
            date: '08/13/17',
            time: ' M',
            winningNumber: [2, 8]
          }, {
            date: '07/19/17',
            time: ' M',
            winningNumber: [4, 2]
          }, {
            date: '06/24/17',
            time: ' M',
            winningNumber: [0, 6]
          }, {
            date: '09/06/17',
            time: ' E',
            winningNumber: [5, 3]
          }, {
            date: '08/12/17',
            time: ' E',
            winningNumber: [6, 2]
          }, {
            date: '07/18/17',
            time: ' E',
            winningNumber: [4, 5]
          }, {
            date: '06/23/17',
            time: ' E',
            winningNumber: [0, 9]
          }, {
            date: '09/06/17',
            time: ' M',
            winningNumber: [4, 3]
          }, {
            date: '08/12/17',
            time: ' M',
            winningNumber: [4, 5]
          }, {
            date: '07/18/17',
            time: ' M',
            winningNumber: [8, 1]
          }, {
            date: '06/23/17',
            time: ' M',
            winningNumber: [6, 4]
          }, {
            date: '09/05/17',
            time: ' E',
            winningNumber: [8, 4]
          }, {
            date: '08/11/17',
            time: ' E',
            winningNumber: [4, 8]
          }, {
            date: '07/17/17',
            time: ' E',
            winningNumber: [1, 2]
          }, {
            date: '06/22/17',
            time: ' E',
            winningNumber: [2, 6]
          }, {
            date: '09/05/17',
            time: ' M',
            winningNumber: [6, 8]
          }, {
            date: '08/11/17',
            time: ' M',
            winningNumber: [1, 8]
          }, {
            date: '07/17/17',
            time: ' M',
            winningNumber: [6, 1]
          }, {
            date: '06/22/17',
            time: ' M',
            winningNumber: [6, 9]
          }, {
            date: '09/04/17',
            time: ' E',
            winningNumber: [0, 0]
          }, {
            date: '08/10/17',
            time: ' E',
            winningNumber: [2, 8]
          }, {
            date: '07/16/17',
            time: ' E',
            winningNumber: [9, 6]
          }, {
            date: '06/21/17',
            time: ' E',
            winningNumber: [8, 3]
          }, {
            date: '09/04/17',
            time: ' M',
            winningNumber: [7, 7]
          }, {
            date: '08/10/17',
            time: ' M',
            winningNumber: [8, 5]
          }, {
            date: '07/16/17',
            time: ' M',
            winningNumber: [9, 5]
          }, {
            date: '06/21/17',
            time: ' M',
            winningNumber: [9, 5]
          }, {
            date: '09/03/17',
            time: ' E',
            winningNumber: [0, 2]
          }, {
            date: '08/09/17',
            time: ' E',
            winningNumber: [9, 4]
          }, {
            date: '07/15/17',
            time: ' E',
            winningNumber: [5, 6]
          }, {
            date: '06/20/17',
            time: ' E',
            winningNumber: [9, 6]
          }, {
            date: '09/03/17',
            time: ' M',
            winningNumber: [2, 8]
          }, {
            date: '08/09/17',
            time: ' M',
            winningNumber: [9, 8]
          }, {
            date: '07/15/17',
            time: ' M',
            winningNumber: [7, 5]
          }, {
            date: '06/20/17',
            time: ' M',
            winningNumber: [3, 3]
          }, {
            date: '09/02/17',
            time: ' E',
            winningNumber: [8, 3]
          }, {
            date: '08/08/17',
            time: ' E',
            winningNumber: [1, 4]
          }, {
            date: '07/14/17',
            time: ' E',
            winningNumber: [5, 6]
          }, {
            date: '06/19/17',
            time: ' E',
            winningNumber: [0, 3]
          }, {
            date: '09/02/17',
            time: ' M',
            winningNumber: [2, 1]
          }, {
            date: '08/08/17',
            time: ' M',
            winningNumber: [8, 6]
          }, {
            date: '07/14/17',
            time: ' M',
            winningNumber: [4, 4]
          }, {
            date: '06/19/17',
            time: ' M',
            winningNumber: [0, 3]
          }, {
            date: '09/01/17',
            time: ' E',
            winningNumber: [2, 2]
          }, {
            date: '08/07/17',
            time: ' E',
            winningNumber: [4, 6]
          }, {
            date: '07/13/17',
            time: ' E',
            winningNumber: [3, 0]
          }, {
            date: '06/18/17',
            time: ' E',
            winningNumber: [0, 4]
          }, {
            date: '09/01/17',
            time: ' M',
            winningNumber: [4, 6]
          }, {
            date: '08/07/17',
            time: ' M',
            winningNumber: [0, 8]
          }, {
            date: '07/13/17',
            time: ' M',
            winningNumber: [7, 2]
          }, {
            date: '06/18/17',
            time: ' M',
            winningNumber: [3, 1]
          }, {
            date: '08/31/17',
            time: ' E',
            winningNumber: [6, 1]
          }, {
            date: '08/06/17',
            time: ' E',
            winningNumber: [1, 0]
          }, {
            date: '07/12/17',
            time: ' E',
            winningNumber: [4, 3]
          }, {
            date: '06/17/17',
            time: ' E',
            winningNumber: [5, 1]
          }, {
            date: '08/31/17',
            time: ' M',
            winningNumber: [0, 9]
          }, {
            date: '08/06/17',
            time: ' M',
            winningNumber: [9, 2]
          }, {
            date: '07/12/17',
            time: ' M',
            winningNumber: [1, 0]
          }, {
            date: '06/17/17',
            time: ' M',
            winningNumber: [0, 6]
          }, {
            date: '08/30/17',
            time: ' E',
            winningNumber: [2, 1]
          }, {
            date: '08/05/17',
            time: ' E',
            winningNumber: [6, 5]
          }, {
            date: '07/11/17',
            time: ' E',
            winningNumber: [0, 9]
          }, {
            date: '06/16/17',
            time: ' E',
            winningNumber: [4, 5]
          }, {
            date: '08/30/17',
            time: ' M',
            winningNumber: [1, 4]
          }, {
            date: '08/05/17',
            time: ' M',
            winningNumber: [0, 2]
          }, {
            date: '07/11/17',
            time: ' M',
            winningNumber: [1, 6]
          }, {
            date: '06/16/17',
            time: ' M',
            winningNumber: [4, 7]
          }, {
            date: '08/29/17',
            time: ' E',
            winningNumber: [9, 0]
          }, {
            date: '08/04/17',
            time: ' E',
            winningNumber: [8, 2]
          }, {
            date: '07/10/17',
            time: ' E',
            winningNumber: [6, 3]
          }, {
            date: '06/15/17',
            time: ' E',
            winningNumber: [3, 7]
          }, {
            date: '08/29/17',
            time: ' M',
            winningNumber: [8, 2]
          }, {
            date: '08/04/17',
            time: ' M',
            winningNumber: [5, 2]
          }, {
            date: '07/10/17',
            time: ' M',
            winningNumber: [3, 4]
          }, {
            date: '06/15/17',
            time: ' M',
            winningNumber: [5, 4]
          }, {
            date: '08/28/17',
            time: ' E',
            winningNumber: [1, 8]
          }, {
            date: '08/03/17',
            time: ' E',
            winningNumber: [4, 9]
          }, {
            date: '07/09/17',
            time: ' E',
            winningNumber: [7, 8]
          }, {
            date: '06/14/17',
            time: ' E',
            winningNumber: [7, 0]
          }, {
            date: '08/28/17',
            time: ' M',
            winningNumber: [4, 9]
          }, {
            date: '08/03/17',
            time: ' M',
            winningNumber: [3, 4]
          }, {
            date: '07/09/17',
            time: ' M',
            winningNumber: [6, 2]
          }, {
            date: '06/14/17',
            time: ' M',
            winningNumber: [3, 6]
          }, {
            date: '08/27/17',
            time: ' E',
            winningNumber: [0, 3]
          }, {
            date: '08/02/17',
            time: ' E',
            winningNumber: [0, 2]
          }, {
            date: '07/08/17',
            time: ' E',
            winningNumber: [8, 9]
          }, {
            date: '06/13/17',
            time: ' E',
            winningNumber: [6, 3]
          }, {
            date: '08/27/17',
            time: ' M',
            winningNumber: [0, 7]
          }, {
            date: '08/02/17',
            time: ' M',
            winningNumber: [8, 1]
          }, {
            date: '07/08/17',
            time: ' M',
            winningNumber: [1, 5]
          }, {
            date: '06/13/17',
            time: ' M',
            winningNumber: [2, 0]
          }, {
            date: '08/26/17',
            time: ' E',
            winningNumber: [4, 1]
          }, {
            date: '08/01/17',
            time: ' E',
            winningNumber: [6, 8]
          }, {
            date: '07/07/17',
            time: ' E',
            winningNumber: [2, 8]
          }, {
            date: '06/12/17',
            time: ' E',
            winningNumber: [8, 9]
          }, {
            date: '08/26/17',
            time: ' M',
            winningNumber: [6, 1]
          }, {
            date: '08/01/17',
            time: ' M',
            winningNumber: [1, 5]
          }, {
            date: '07/07/17',
            time: ' M',
            winningNumber: [7, 9]
          }, {
            date: '06/12/17',
            time: ' M',
            winningNumber: [9, 7]
          }, {
            date: '08/25/17',
            time: ' E',
            winningNumber: [1, 6]
          }, {
            date: '07/31/17',
            time: ' E',
            winningNumber: [4, 2]
          }, {
            date: '07/06/17',
            time: ' E',
            winningNumber: [1, 9]
          }, {
            date: '06/11/17',
            time: ' E',
            winningNumber: [2, 7]
          }, {
            date: '08/25/17',
            time: ' M',
            winningNumber: [3, 3]
          }, {
            date: '07/31/17',
            time: ' M',
            winningNumber: [5, 4]
          }, {
            date: '07/06/17',
            time: ' M',
            winningNumber: [5, 5]
          }, {
            date: '06/11/17',
            time: ' M',
            winningNumber: [8, 2]
          }, {
            date: '08/24/17',
            time: ' E',
            winningNumber: [9, 9]
          }, {
            date: '07/30/17',
            time: ' E',
            winningNumber: [7, 5]
          }, {
            date: '07/05/17',
            time: ' E',
            winningNumber: [5, 2]
          }, {
            date: '06/10/17',
            time: ' E',
            winningNumber: [3, 7]
          }, {
            date: '08/24/17',
            time: ' M',
            winningNumber: [6, 3]
          }, {
            date: '07/30/17',
            time: ' M',
            winningNumber: [8, 3]
          }, {
            date: '07/05/17',
            time: ' M',
            winningNumber: [2, 0]
          }, {
            date: '06/10/17',
            time: ' M',
            winningNumber: [7, 8]
          }, {
            date: '08/23/17',
            time: ' E',
            winningNumber: [0, 6]
          }, {
            date: '07/29/17',
            time: ' E',
            winningNumber: [1, 1]
          }, {
            date: '07/04/17',
            time: ' E',
            winningNumber: [2, 0]
          }, {
            date: '06/09/17',
            time: ' E',
            winningNumber: [8, 2]
          }, {
            date: '08/23/17',
            time: ' M',
            winningNumber: [3, 1]
          }, {
            date: '07/29/17',
            time: ' M',
            winningNumber: [2, 9]
          }, {
            date: '07/04/17',
            time: ' M',
            winningNumber: [2, 5]
          }, {
            date: '06/09/17',
            time: ' M',
            winningNumber: [6, 3]
          }, {
            date: '08/22/17',
            time: ' E',
            winningNumber: [9, 5]
          }, {
            date: '07/28/17',
            time: ' E',
            winningNumber: [6, 6]
          }, {
            date: '07/03/17',
            time: ' E',
            winningNumber: [6, 0]
          }, {
            date: '06/08/17',
            time: ' E',
            winningNumber: [4, 4]
          }, {
            date: '08/22/17',
            time: ' M',
            winningNumber: [4, 0]
          }, {
            date: '07/28/17',
            time: ' M',
            winningNumber: [9, 8]
          }, {
            date: '07/03/17',
            time: ' M',
            winningNumber: [2, 1]
          }, {
            date: '06/08/17',
            time: ' M',
            winningNumber: [3, 1]
          }, {
            date: '08/21/17',
            time: ' E',
            winningNumber: [2, 9]
          }, {
            date: '07/27/17',
            time: ' E',
            winningNumber: [7, 8]
          }, {
            date: '07/02/17',
            time: ' E',
            winningNumber: [9, 6]
          }, {
            date: '06/07/17',
            time: ' E',
            winningNumber: [8, 1]
          }, {
            date: '08/21/17',
            time: ' M',
            winningNumber: [5, 1]
          }, {
            date: '07/27/17',
            time: ' M',
            winningNumber: [6, 3]
          }, {
            date: '07/02/17',
            time: ' M',
            winningNumber: [7, 7]
          }, {
            date: '06/07/17',
            time: ' M',
            winningNumber: [9, 3]
          }, {
            date: '08/20/17',
            time: ' E',
            winningNumber: [3, 4]
          }, {
            date: '07/26/17',
            time: ' E',
            winningNumber: [7, 1]
          }, {
            date: '07/01/17',
            time: ' E',
            winningNumber: [6, 8]
          }, {
            date: '06/06/17',
            time: ' E',
            winningNumber: [9, 6]
          }, {
            date: '08/20/17',
            time: ' M',
            winningNumber: [8, 3]
          }, {
            date: '07/26/17',
            time: ' M',
            winningNumber: [2, 4]
          }, {
            date: '07/01/17',
            time: ' M',
            winningNumber: [2, 3]
          }, {
            date: '06/06/17',
            time: ' M',
            winningNumber: [4, 8]
          }, {
            date: '08/19/17',
            time: ' E',
            winningNumber: [6, 7]
          }, {
            date: '07/25/17',
            time: ' E',
            winningNumber: [7, 7]
          }, {
            date: '06/30/17',
            time: ' E',
            winningNumber: [3, 2]
          }, {
            date: '06/05/17',
            time: ' E',
            winningNumber: [3, 1]
          }, {
            date: '08/19/17',
            time: ' M',
            winningNumber: [3, 4]
          }, {
            date: '07/25/17',
            time: ' M',
            winningNumber: [1, 2]
          }, {
            date: '06/30/17',
            time: ' M',
            winningNumber: [1, 0]
          }, {
            date: '06/05/17',
            time: ' M',
            winningNumber: [8, 9]
          }, {
            date: '08/18/17',
            time: ' E',
            winningNumber: [2, 0]
          }, {
            date: '07/24/17',
            time: ' E',
            winningNumber: [3, 3]
          }, {
            date: '06/29/17',
            time: ' E',
            winningNumber: [8, 9]
          }, {
            date: '06/04/17',
            time: ' E',
            winningNumber: [1, 6]
          }, {
            date: '08/18/17',
            time: ' M',
            winningNumber: [0, 0]
          }, {
            date: '07/24/17',
            time: ' M',
            winningNumber: [0, 6]
          }, {
            date: '06/29/17',
            time: ' M',
            winningNumber: [6, 8]
          }, {
            date: '06/04/17',
            time: ' M',
            winningNumber: [5, 4]
          }, {
            date: '06/03/17',
            time: ' E',
            winningNumber: [9, 5]
          }, {
            date: '05/09/17',
            time: ' E',
            winningNumber: [0, 1]
          }, {
            date: '04/14/17',
            time: ' E',
            winningNumber: [8, 1]
          }, {
            date: '03/20/17',
            time: ' E',
            winningNumber: [7, 3]
          }, {
            date: '06/03/17',
            time: ' M',
            winningNumber: [8, 5]
          }, {
            date: '05/09/17',
            time: ' M',
            winningNumber: [5, 8]
          }, {
            date: '04/14/17',
            time: ' M',
            winningNumber: [2, 6]
          }, {
            date: '03/20/17',
            time: ' M',
            winningNumber: [0, 9]
          }, {
            date: '06/02/17',
            time: ' E',
            winningNumber: [2, 4]
          }, {
            date: '05/08/17',
            time: ' E',
            winningNumber: [7, 7]
          }, {
            date: '04/13/17',
            time: ' E',
            winningNumber: [7, 4]
          }, {
            date: '03/19/17',
            time: ' E',
            winningNumber: [3, 6]
          }, {
            date: '06/02/17',
            time: ' M',
            winningNumber: [9, 3]
          }, {
            date: '05/08/17',
            time: ' M',
            winningNumber: [4, 5]
          }, {
            date: '04/13/17',
            time: ' M',
            winningNumber: [9, 6]
          }, {
            date: '03/19/17',
            time: ' M',
            winningNumber: [2, 7]
          }, {
            date: '06/01/17',
            time: ' E',
            winningNumber: [9, 1]
          }, {
            date: '05/07/17',
            time: ' E',
            winningNumber: [3, 8]
          }, {
            date: '04/12/17',
            time: ' E',
            winningNumber: [9, 2]
          }, {
            date: '03/18/17',
            time: ' E',
            winningNumber: [4, 1]
          }, {
            date: '06/01/17',
            time: ' M',
            winningNumber: [8, 0]
          }, {
            date: '05/07/17',
            time: ' M',
            winningNumber: [9, 6]
          }, {
            date: '04/12/17',
            time: ' M',
            winningNumber: [7, 5]
          }, {
            date: '03/18/17',
            time: ' M',
            winningNumber: [1, 1]
          }, {
            date: '05/31/17',
            time: ' E',
            winningNumber: [1, 1]
          }, {
            date: '05/06/17',
            time: ' E',
            winningNumber: [3, 5]
          }, {
            date: '04/11/17',
            time: ' E',
            winningNumber: [7, 6]
          }, {
            date: '03/17/17',
            time: ' E',
            winningNumber: [8, 1]
          }, {
            date: '05/31/17',
            time: ' M',
            winningNumber: [0, 0]
          }, {
            date: '05/06/17',
            time: ' M',
            winningNumber: [4, 5]
          }, {
            date: '04/11/17',
            time: ' M',
            winningNumber: [0, 0]
          }, {
            date: '03/17/17',
            time: ' M',
            winningNumber: [5, 4]
          }, {
            date: '05/30/17',
            time: ' E',
            winningNumber: [2, 8]
          }, {
            date: '05/05/17',
            time: ' E',
            winningNumber: [7, 7]
          }, {
            date: '04/10/17',
            time: ' E',
            winningNumber: [3, 4]
          }, {
            date: '03/16/17',
            time: ' E',
            winningNumber: [6, 0]
          }, {
            date: '05/30/17',
            time: ' M',
            winningNumber: [7, 5]
          }, {
            date: '05/05/17',
            time: ' M',
            winningNumber: [2, 2]
          }, {
            date: '04/10/17',
            time: ' M',
            winningNumber: [5, 3]
          }, {
            date: '03/16/17',
            time: ' M',
            winningNumber: [8, 2]
          }, {
            date: '05/29/17',
            time: ' E',
            winningNumber: [9, 9]
          }, {
            date: '05/04/17',
            time: ' E',
            winningNumber: [0, 0]
          }, {
            date: '04/09/17',
            time: ' E',
            winningNumber: [8, 9]
          }, {
            date: '03/15/17',
            time: ' E',
            winningNumber: [7, 9]
          }, {
            date: '05/29/17',
            time: ' M',
            winningNumber: [8, 6]
          }, {
            date: '05/04/17',
            time: ' M',
            winningNumber: [5, 8]
          }, {
            date: '04/09/17',
            time: ' M',
            winningNumber: [7, 8]
          }, {
            date: '03/15/17',
            time: ' M',
            winningNumber: [9, 4]
          }, {
            date: '05/28/17',
            time: ' E',
            winningNumber: [5, 2]
          }, {
            date: '05/03/17',
            time: ' E',
            winningNumber: [4, 7]
          }, {
            date: '04/08/17',
            time: ' E',
            winningNumber: [3, 2]
          }, {
            date: '03/14/17',
            time: ' E',
            winningNumber: [7, 4]
          }, {
            date: '05/28/17',
            time: ' M',
            winningNumber: [3, 9]
          }, {
            date: '05/03/17',
            time: ' M',
            winningNumber: [5, 5]
          }, {
            date: '04/08/17',
            time: ' M',
            winningNumber: [7, 8]
          }, {
            date: '03/14/17',
            time: ' M',
            winningNumber: [8, 1]
          }, {
            date: '05/27/17',
            time: ' E',
            winningNumber: [6, 8]
          }, {
            date: '05/02/17',
            time: ' E',
            winningNumber: [5, 3]
          }, {
            date: '04/07/17',
            time: ' E',
            winningNumber: [3, 6]
          }, {
            date: '03/13/17',
            time: ' E',
            winningNumber: [9, 7]
          }, {
            date: '05/27/17',
            time: ' M',
            winningNumber: [8, 5]
          }, {
            date: '05/02/17',
            time: ' M',
            winningNumber: [7, 0]
          }, {
            date: '04/07/17',
            time: ' M',
            winningNumber: [8, 9]
          }, {
            date: '03/13/17',
            time: ' M',
            winningNumber: [2, 3]
          }, {
            date: '05/26/17',
            time: ' E',
            winningNumber: [1, 3]
          }, {
            date: '05/01/17',
            time: ' E',
            winningNumber: [4, 3]
          }, {
            date: '04/06/17',
            time: ' E',
            winningNumber: [4, 1]
          }, {
            date: '03/12/17',
            time: ' E',
            winningNumber: [0, 7]
          }, {
            date: '05/26/17',
            time: ' M',
            winningNumber: [1, 1]
          }, {
            date: '05/01/17',
            time: ' M',
            winningNumber: [4, 6]
          }, {
            date: '04/06/17',
            time: ' M',
            winningNumber: [2, 2]
          }, {
            date: '03/12/17',
            time: ' M',
            winningNumber: [5, 3]
          }, {
            date: '05/25/17',
            time: ' E',
            winningNumber: [7, 4]
          }, {
            date: '04/30/17',
            time: ' E',
            winningNumber: [1, 1]
          }, {
            date: '04/05/17',
            time: ' E',
            winningNumber: [7, 7]
          }, {
            date: '03/11/17',
            time: ' E',
            winningNumber: [1, 3]
          }, {
            date: '05/25/17',
            time: ' M',
            winningNumber: [1, 2]
          }, {
            date: '04/30/17',
            time: ' M',
            winningNumber: [4, 2]
          }, {
            date: '04/05/17',
            time: ' M',
            winningNumber: [1, 6]
          }, {
            date: '03/11/17',
            time: ' M',
            winningNumber: [8, 6]
          }, {
            date: '05/24/17',
            time: ' E',
            winningNumber: [5, 9]
          }, {
            date: '04/29/17',
            time: ' E',
            winningNumber: [6, 9]
          }, {
            date: '04/04/17',
            time: ' E',
            winningNumber: [8, 3]
          }, {
            date: '03/10/17',
            time: ' E',
            winningNumber: [5, 2]
          }, {
            date: '05/24/17',
            time: ' M',
            winningNumber: [6, 5]
          }, {
            date: '04/29/17',
            time: ' M',
            winningNumber: [3, 6]
          }, {
            date: '04/04/17',
            time: ' M',
            winningNumber: [3, 5]
          }, {
            date: '03/10/17',
            time: ' M',
            winningNumber: [6, 3]
          }, {
            date: '05/23/17',
            time: ' E',
            winningNumber: [3, 6]
          }, {
            date: '04/28/17',
            time: ' E',
            winningNumber: [7, 4]
          }, {
            date: '04/03/17',
            time: ' E',
            winningNumber: [2, 8]
          }, {
            date: '03/09/17',
            time: ' E',
            winningNumber: [7, 7]
          }, {
            date: '05/23/17',
            time: ' M',
            winningNumber: [1, 6]
          }, {
            date: '04/28/17',
            time: ' M',
            winningNumber: [3, 0]
          }, {
            date: '04/03/17',
            time: ' M',
            winningNumber: [7, 1]
          }, {
            date: '03/09/17',
            time: ' M',
            winningNumber: [5, 5]
          }, {
            date: '05/22/17',
            time: ' E',
            winningNumber: [1, 5]
          }, {
            date: '04/27/17',
            time: ' E',
            winningNumber: [8, 0]
          }, {
            date: '04/02/17',
            time: ' E',
            winningNumber: [6, 3]
          }, {
            date: '03/08/17',
            time: ' E',
            winningNumber: [6, 1]
          }, {
            date: '05/22/17',
            time: ' M',
            winningNumber: [2, 2]
          }, {
            date: '04/27/17',
            time: ' M',
            winningNumber: [2, 0]
          }, {
            date: '04/02/17',
            time: ' M',
            winningNumber: [5, 7]
          }, {
            date: '03/08/17',
            time: ' M',
            winningNumber: [5, 5]
          }, {
            date: '05/21/17',
            time: ' E',
            winningNumber: [2, 4]
          }, {
            date: '04/26/17',
            time: ' E',
            winningNumber: [1, 2]
          }, {
            date: '04/01/17',
            time: ' E',
            winningNumber: [0, 1]
          }, {
            date: '03/07/17',
            time: ' E',
            winningNumber: [4, 2]
          }, {
            date: '05/21/17',
            time: ' M',
            winningNumber: [1, 7]
          }, {
            date: '04/26/17',
            time: ' M',
            winningNumber: [7, 3]
          }, {
            date: '04/01/17',
            time: ' M',
            winningNumber: [4, 9]
          }, {
            date: '03/07/17',
            time: ' M',
            winningNumber: [6, 8]
          }, {
            date: '05/20/17',
            time: ' E',
            winningNumber: [0, 7]
          }, {
            date: '04/25/17',
            time: ' E',
            winningNumber: [3, 8]
          }, {
            date: '03/31/17',
            time: ' E',
            winningNumber: [8, 4]
          }, {
            date: '03/06/17',
            time: ' E',
            winningNumber: [0, 6]
          }, {
            date: '05/20/17',
            time: ' M',
            winningNumber: [1, 7]
          }, {
            date: '04/25/17',
            time: ' M',
            winningNumber: [0, 0]
          }, {
            date: '03/31/17',
            time: ' M',
            winningNumber: [7, 6]
          }, {
            date: '03/06/17',
            time: ' M',
            winningNumber: [7, 5]
          }, {
            date: '05/19/17',
            time: ' E',
            winningNumber: [1, 2]
          }, {
            date: '04/24/17',
            time: ' E',
            winningNumber: [6, 0]
          }, {
            date: '03/30/17',
            time: ' E',
            winningNumber: [6, 2]
          }, {
            date: '03/05/17',
            time: ' E',
            winningNumber: [4, 2]
          }, {
            date: '05/19/17',
            time: ' M',
            winningNumber: [8, 9]
          }, {
            date: '04/24/17',
            time: ' M',
            winningNumber: [0, 7]
          }, {
            date: '03/30/17',
            time: ' M',
            winningNumber: [4, 9]
          }, {
            date: '03/05/17',
            time: ' M',
            winningNumber: [1, 2]
          }, {
            date: '05/18/17',
            time: ' E',
            winningNumber: [1, 5]
          }, {
            date: '04/23/17',
            time: ' E',
            winningNumber: [9, 0]
          }, {
            date: '03/29/17',
            time: ' E',
            winningNumber: [7, 1]
          }, {
            date: '03/04/17',
            time: ' E',
            winningNumber: [8, 2]
          }, {
            date: '05/18/17',
            time: ' M',
            winningNumber: [1, 3]
          }, {
            date: '04/23/17',
            time: ' M',
            winningNumber: [1, 3]
          }, {
            date: '03/29/17',
            time: ' M',
            winningNumber: [1, 7]
          }, {
            date: '03/04/17',
            time: ' M',
            winningNumber: [8, 0]
          }, {
            date: '05/17/17',
            time: ' E',
            winningNumber: [3, 2]
          }, {
            date: '04/22/17',
            time: ' E',
            winningNumber: [6, 1]
          }, {
            date: '03/28/17',
            time: ' E',
            winningNumber: [0, 9]
          }, {
            date: '03/03/17',
            time: ' E',
            winningNumber: [4, 2]
          }, {
            date: '05/17/17',
            time: ' M',
            winningNumber: [3, 5]
          }, {
            date: '04/22/17',
            time: ' M',
            winningNumber: [2, 9]
          }, {
            date: '03/28/17',
            time: ' M',
            winningNumber: [4, 1]
          }, {
            date: '03/03/17',
            time: ' M',
            winningNumber: [1, 9]
          }, {
            date: '05/16/17',
            time: ' E',
            winningNumber: [0, 7]
          }, {
            date: '04/21/17',
            time: ' E',
            winningNumber: [2, 7]
          }, {
            date: '03/27/17',
            time: ' E',
            winningNumber: [3, 1]
          }, {
            date: '03/02/17',
            time: ' E',
            winningNumber: [2, 6]
          }, {
            date: '05/16/17',
            time: ' M',
            winningNumber: [3, 0]
          }, {
            date: '04/21/17',
            time: ' M',
            winningNumber: [7, 2]
          }, {
            date: '03/27/17',
            time: ' M',
            winningNumber: [7, 6]
          }, {
            date: '03/02/17',
            time: ' M',
            winningNumber: [2, 3]
          }, {
            date: '05/15/17',
            time: ' E',
            winningNumber: [5, 2]
          }, {
            date: '04/20/17',
            time: ' E',
            winningNumber: [3, 5]
          }, {
            date: '03/26/17',
            time: ' E',
            winningNumber: [1, 0]
          }, {
            date: '03/01/17',
            time: ' E',
            winningNumber: [2, 3]
          }, {
            date: '05/15/17',
            time: ' M',
            winningNumber: [7, 5]
          }, {
            date: '04/20/17',
            time: ' M',
            winningNumber: [8, 3]
          }, {
            date: '03/26/17',
            time: ' M',
            winningNumber: [4, 4]
          }, {
            date: '03/01/17',
            time: ' M',
            winningNumber: [7, 3]
          }, {
            date: '05/14/17',
            time: ' E',
            winningNumber: [6, 7]
          }, {
            date: '04/19/17',
            time: ' E',
            winningNumber: [6, 6]
          }, {
            date: '03/25/17',
            time: ' E',
            winningNumber: [9, 7]
          }, {
            date: '02/28/17',
            time: ' E',
            winningNumber: [1, 0]
          }, {
            date: '05/14/17',
            time: ' M',
            winningNumber: [7, 6]
          }, {
            date: '04/19/17',
            time: ' M',
            winningNumber: [6, 2]
          }, {
            date: '03/25/17',
            time: ' M',
            winningNumber: [2, 1]
          }, {
            date: '02/28/17',
            time: ' M',
            winningNumber: [2, 6]
          }, {
            date: '05/13/17',
            time: ' E',
            winningNumber: [2, 3]
          }, {
            date: '04/18/17',
            time: ' E',
            winningNumber: [3, 2]
          }, {
            date: '03/24/17',
            time: ' E',
            winningNumber: [5, 3]
          }, {
            date: '02/27/17',
            time: ' E',
            winningNumber: [1, 4]
          }, {
            date: '05/13/17',
            time: ' M',
            winningNumber: [2, 8]
          }, {
            date: '04/18/17',
            time: ' M',
            winningNumber: [5, 4]
          }, {
            date: '03/24/17',
            time: ' M',
            winningNumber: [3, 1]
          }, {
            date: '02/27/17',
            time: ' M',
            winningNumber: [4, 0]
          }, {
            date: '05/12/17',
            time: ' E',
            winningNumber: [3, 2]
          }, {
            date: '04/17/17',
            time: ' E',
            winningNumber: [6, 4]
          }, {
            date: '03/23/17',
            time: ' E',
            winningNumber: [9, 2]
          }, {
            date: '02/26/17',
            time: ' E',
            winningNumber: [2, 7]
          }, {
            date: '05/12/17',
            time: ' M',
            winningNumber: [3, 2]
          }, {
            date: '04/17/17',
            time: ' M',
            winningNumber: [1, 4]
          }, {
            date: '03/23/17',
            time: ' M',
            winningNumber: [7, 2]
          }, {
            date: '02/26/17',
            time: ' M',
            winningNumber: [7, 3]
          }, {
            date: '05/11/17',
            time: ' E',
            winningNumber: [9, 4]
          }, {
            date: '04/16/17',
            time: ' E',
            winningNumber: [1, 7]
          }, {
            date: '03/22/17',
            time: ' E',
            winningNumber: [2, 7]
          }, {
            date: '02/25/17',
            time: ' E',
            winningNumber: [0, 2]
          }, {
            date: '05/11/17',
            time: ' M',
            winningNumber: [4, 3]
          }, {
            date: '04/16/17',
            time: ' M',
            winningNumber: [0, 5]
          }, {
            date: '03/22/17',
            time: ' M',
            winningNumber: [7, 6]
          }, {
            date: '02/25/17',
            time: ' M',
            winningNumber: [5, 4]
          }, {
            date: '05/10/17',
            time: ' E',
            winningNumber: [4, 4]
          }, {
            date: '04/15/17',
            time: ' E',
            winningNumber: [6, 7]
          }, {
            date: '03/21/17',
            time: ' E',
            winningNumber: [5, 7]
          }, {
            date: '02/24/17',
            time: ' E',
            winningNumber: [0, 1]
          }, {
            date: '05/10/17',
            time: ' M',
            winningNumber: [9, 6]
          }, {
            date: '04/15/17',
            time: ' M',
            winningNumber: [1, 2]
          }, {
            date: '03/21/17',
            time: ' M',
            winningNumber: [3, 3]
          }, {
            date: '02/23/17',
            time: ' E',
            winningNumber: [8, 3]
          }, {
            date: '01/29/17',
            time: ' E',
            winningNumber: [6, 8]
          }, {
            date: '01/04/17',
            time: ' E',
            winningNumber: [2, 3]
          }, {
            date: '12/10/16',
            time: ' E',
            winningNumber: [2, 6]
          }, {
            date: '02/23/17',
            time: ' M',
            winningNumber: [7, 8]
          }, {
            date: '01/29/17',
            time: ' M',
            winningNumber: [4, 6]
          }, {
            date: '01/04/17',
            time: ' M',
            winningNumber: [5, 7]
          }, {
            date: '12/10/16',
            time: ' M',
            winningNumber: [8, 8]
          }, {
            date: '02/22/17',
            time: ' E',
            winningNumber: [7, 4]
          }, {
            date: '01/28/17',
            time: ' E',
            winningNumber: [3, 3]
          }, {
            date: '01/03/17',
            time: ' E',
            winningNumber: [0, 0]
          }, {
            date: '12/09/16',
            time: ' E',
            winningNumber: [2, 9]
          }, {
            date: '02/22/17',
            time: ' M',
            winningNumber: [8, 6]
          }, {
            date: '01/28/17',
            time: ' M',
            winningNumber: [9, 4]
          }, {
            date: '01/03/17',
            time: ' M',
            winningNumber: [5, 1]
          }, {
            date: '12/09/16',
            time: ' M',
            winningNumber: [2, 5]
          }, {
            date: '02/21/17',
            time: ' E',
            winningNumber: [1, 4]
          }, {
            date: '01/27/17',
            time: ' E',
            winningNumber: [8, 2]
          }, {
            date: '01/02/17',
            time: ' E',
            winningNumber: [2, 2]
          }, {
            date: '12/08/16',
            time: ' E',
            winningNumber: [5, 8]
          }, {
            date: '02/21/17',
            time: ' M',
            winningNumber: [4, 7]
          }, {
            date: '01/27/17',
            time: ' M',
            winningNumber: [5, 4]
          }, {
            date: '01/02/17',
            time: ' M',
            winningNumber: [1, 1]
          }, {
            date: '12/08/16',
            time: ' M',
            winningNumber: [6, 7]
          }, {
            date: '02/20/17',
            time: ' E',
            winningNumber: [6, 3]
          }, {
            date: '01/26/17',
            time: ' E',
            winningNumber: [6, 7]
          }, {
            date: '01/01/17',
            time: ' E',
            winningNumber: [9, 3]
          }, {
            date: '12/07/16',
            time: ' E',
            winningNumber: [9, 4]
          }, {
            date: '02/20/17',
            time: ' M',
            winningNumber: [2, 9]
          }, {
            date: '01/26/17',
            time: ' M',
            winningNumber: [8, 2]
          }, {
            date: '01/01/17',
            time: ' M',
            winningNumber: [3, 9]
          }, {
            date: '12/07/16',
            time: ' M',
            winningNumber: [0, 8]
          }, {
            date: '02/19/17',
            time: ' E',
            winningNumber: [8, 0]
          }, {
            date: '01/25/17',
            time: ' E',
            winningNumber: [6, 2]
          }, {
            date: '12/31/16',
            time: ' E',
            winningNumber: [6, 8]
          }, {
            date: '12/06/16',
            time: ' E',
            winningNumber: [5, 4]
          }, {
            date: '02/19/17',
            time: ' M',
            winningNumber: [6, 3]
          }, {
            date: '01/25/17',
            time: ' M',
            winningNumber: [1, 2]
          }, {
            date: '12/31/16',
            time: ' M',
            winningNumber: [2, 1]
          }, {
            date: '12/06/16',
            time: ' M',
            winningNumber: [7, 4]
          }, {
            date: '02/18/17',
            time: ' E',
            winningNumber: [9, 7]
          }, {
            date: '01/24/17',
            time: ' E',
            winningNumber: [2, 7]
          }, {
            date: '12/30/16',
            time: ' E',
            winningNumber: [1, 4]
          }, {
            date: '12/05/16',
            time: ' E',
            winningNumber: [8, 9]
          }, {
            date: '02/18/17',
            time: ' M',
            winningNumber: [6, 5]
          }, {
            date: '01/24/17',
            time: ' M',
            winningNumber: [7, 9]
          }, {
            date: '12/30/16',
            time: ' M',
            winningNumber: [2, 4]
          }, {
            date: '12/05/16',
            time: ' M',
            winningNumber: [7, 5]
          }, {
            date: '02/17/17',
            time: ' E',
            winningNumber: [0, 9]
          }, {
            date: '01/23/17',
            time: ' E',
            winningNumber: [4, 8]
          }, {
            date: '12/29/16',
            time: ' E',
            winningNumber: [8, 5]
          }, {
            date: '12/04/16',
            time: ' E',
            winningNumber: [7, 7]
          }, {
            date: '02/17/17',
            time: ' M',
            winningNumber: [5, 5]
          }, {
            date: '01/23/17',
            time: ' M',
            winningNumber: [6, 9]
          }, {
            date: '12/29/16',
            time: ' M',
            winningNumber: [6, 6]
          }, {
            date: '12/04/16',
            time: ' M',
            winningNumber: [6, 2]
          }, {
            date: '02/16/17',
            time: ' E',
            winningNumber: [4, 3]
          }, {
            date: '01/22/17',
            time: ' E',
            winningNumber: [4, 5]
          }, {
            date: '12/28/16',
            time: ' E',
            winningNumber: [8, 9]
          }, {
            date: '12/03/16',
            time: ' E',
            winningNumber: [3, 5]
          }, {
            date: '02/16/17',
            time: ' M',
            winningNumber: [3, 5]
          }, {
            date: '01/22/17',
            time: ' M',
            winningNumber: [0, 5]
          }, {
            date: '12/28/16',
            time: ' M',
            winningNumber: [9, 4]
          }, {
            date: '12/03/16',
            time: ' M',
            winningNumber: [1, 4]
          }, {
            date: '02/15/17',
            time: ' E',
            winningNumber: [1, 6]
          }, {
            date: '01/21/17',
            time: ' E',
            winningNumber: [0, 4]
          }, {
            date: '12/27/16',
            time: ' E',
            winningNumber: [6, 0]
          }, {
            date: '12/02/16',
            time: ' E',
            winningNumber: [5, 4]
          }, {
            date: '02/15/17',
            time: ' M',
            winningNumber: [7, 8]
          }, {
            date: '01/21/17',
            time: ' M',
            winningNumber: [5, 8]
          }, {
            date: '12/27/16',
            time: ' M',
            winningNumber: [2, 4]
          }, {
            date: '12/02/16',
            time: ' M',
            winningNumber: [4, 0]
          }, {
            date: '02/14/17',
            time: ' E',
            winningNumber: [1, 4]
          }, {
            date: '01/20/17',
            time: ' E',
            winningNumber: [7, 6]
          }, {
            date: '12/26/16',
            time: ' E',
            winningNumber: [8, 0]
          }, {
            date: '12/01/16',
            time: ' E',
            winningNumber: [4, 3]
          }, {
            date: '02/14/17',
            time: ' M',
            winningNumber: [1, 3]
          }, {
            date: '01/20/17',
            time: ' M',
            winningNumber: [6, 1]
          }, {
            date: '12/26/16',
            time: ' M',
            winningNumber: [3, 0]
          }, {
            date: '12/01/16',
            time: ' M',
            winningNumber: [0, 2]
          }, {
            date: '02/13/17',
            time: ' E',
            winningNumber: [3, 9]
          }, {
            date: '01/19/17',
            time: ' E',
            winningNumber: [4, 2]
          }, {
            date: '12/25/16',
            time: ' E',
            winningNumber: [5, 7]
          }, {
            date: '11/30/16',
            time: ' E',
            winningNumber: [7, 4]
          }, {
            date: '02/13/17',
            time: ' M',
            winningNumber: [7, 6]
          }, {
            date: '01/19/17',
            time: ' M',
            winningNumber: [4, 5]
          }, {
            date: '12/25/16',
            time: ' M',
            winningNumber: [3, 2]
          }, {
            date: '11/30/16',
            time: ' M',
            winningNumber: [2, 0]
          }, {
            date: '02/12/17',
            time: ' E',
            winningNumber: [7, 3]
          }, {
            date: '01/18/17',
            time: ' E',
            winningNumber: [8, 4]
          }, {
            date: '12/24/16',
            time: ' E',
            winningNumber: [9, 5]
          }, {
            date: '11/29/16',
            time: ' E',
            winningNumber: [3, 5]
          }, {
            date: '02/12/17',
            time: ' M',
            winningNumber: [4, 3]
          }, {
            date: '01/18/17',
            time: ' M',
            winningNumber: [5, 2]
          }, {
            date: '12/24/16',
            time: ' M',
            winningNumber: [0, 6]
          }, {
            date: '11/29/16',
            time: ' M',
            winningNumber: [4, 5]
          }, {
            date: '02/11/17',
            time: ' E',
            winningNumber: [6, 7]
          }, {
            date: '01/17/17',
            time: ' E',
            winningNumber: [8, 9]
          }, {
            date: '12/23/16',
            time: ' E',
            winningNumber: [7, 7]
          }, {
            date: '11/28/16',
            time: ' E',
            winningNumber: [0, 6]
          }, {
            date: '02/11/17',
            time: ' M',
            winningNumber: [0, 0]
          }, {
            date: '01/17/17',
            time: ' M',
            winningNumber: [7, 0]
          }, {
            date: '12/23/16',
            time: ' M',
            winningNumber: [4, 4]
          }, {
            date: '11/28/16',
            time: ' M',
            winningNumber: [9, 7]
          }, {
            date: '02/10/17',
            time: ' E',
            winningNumber: [8, 9]
          }, {
            date: '01/16/17',
            time: ' E',
            winningNumber: [4, 8]
          }, {
            date: '12/22/16',
            time: ' E',
            winningNumber: [4, 1]
          }, {
            date: '11/27/16',
            time: ' E',
            winningNumber: [1, 3]
          }, {
            date: '02/10/17',
            time: ' M',
            winningNumber: [2, 6]
          }, {
            date: '01/16/17',
            time: ' M',
            winningNumber: [7, 4]
          }, {
            date: '12/22/16',
            time: ' M',
            winningNumber: [1, 4]
          }, {
            date: '11/27/16',
            time: ' M',
            winningNumber: [9, 1]
          }, {
            date: '02/09/17',
            time: ' E',
            winningNumber: [0, 0]
          }, {
            date: '01/15/17',
            time: ' E',
            winningNumber: [0, 7]
          }, {
            date: '12/21/16',
            time: ' E',
            winningNumber: [7, 1]
          }, {
            date: '11/26/16',
            time: ' E',
            winningNumber: [4, 7]
          }, {
            date: '02/09/17',
            time: ' M',
            winningNumber: [7, 4]
          }, {
            date: '01/15/17',
            time: ' M',
            winningNumber: [7, 0]
          }, {
            date: '12/21/16',
            time: ' M',
            winningNumber: [3, 4]
          }, {
            date: '11/26/16',
            time: ' M',
            winningNumber: [6, 1]
          }, {
            date: '02/08/17',
            time: ' E',
            winningNumber: [5, 9]
          }, {
            date: '01/14/17',
            time: ' E',
            winningNumber: [1, 4]
          }, {
            date: '12/20/16',
            time: ' E',
            winningNumber: [9, 3]
          }, {
            date: '11/25/16',
            time: ' E',
            winningNumber: [7, 7]
          }, {
            date: '02/08/17',
            time: ' M',
            winningNumber: [5, 1]
          }, {
            date: '01/14/17',
            time: ' M',
            winningNumber: [6, 8]
          }, {
            date: '12/20/16',
            time: ' M',
            winningNumber: [6, 0]
          }, {
            date: '11/25/16',
            time: ' M',
            winningNumber: [3, 6]
          }, {
            date: '02/07/17',
            time: ' E',
            winningNumber: [2, 7]
          }, {
            date: '01/13/17',
            time: ' E',
            winningNumber: [6, 3]
          }, {
            date: '12/19/16',
            time: ' E',
            winningNumber: [5, 2]
          }, {
            date: '11/24/16',
            time: ' E',
            winningNumber: [6, 2]
          }, {
            date: '02/07/17',
            time: ' M',
            winningNumber: [5, 5]
          }, {
            date: '01/13/17',
            time: ' M',
            winningNumber: [6, 0]
          }, {
            date: '12/19/16',
            time: ' M',
            winningNumber: [3, 7]
          }, {
            date: '11/24/16',
            time: ' M',
            winningNumber: [0, 1]
          }, {
            date: '02/06/17',
            time: ' E',
            winningNumber: [8, 4]
          }, {
            date: '01/12/17',
            time: ' E',
            winningNumber: [6, 2]
          }, {
            date: '12/18/16',
            time: ' E',
            winningNumber: [4, 7]
          }, {
            date: '11/23/16',
            time: ' E',
            winningNumber: [1, 2]
          }, {
            date: '02/06/17',
            time: ' M',
            winningNumber: [1, 6]
          }, {
            date: '01/12/17',
            time: ' M',
            winningNumber: [8, 7]
          }, {
            date: '12/18/16',
            time: ' M',
            winningNumber: [2, 1]
          }, {
            date: '11/23/16',
            time: ' M',
            winningNumber: [5, 2]
          }, {
            date: '02/05/17',
            time: ' E',
            winningNumber: [9, 0]
          }, {
            date: '01/11/17',
            time: ' E',
            winningNumber: [9, 8]
          }, {
            date: '12/17/16',
            time: ' E',
            winningNumber: [0, 6]
          }, {
            date: '11/22/16',
            time: ' E',
            winningNumber: [9, 0]
          }, {
            date: '02/05/17',
            time: ' M',
            winningNumber: [5, 7]
          }, {
            date: '01/11/17',
            time: ' M',
            winningNumber: [4, 1]
          }, {
            date: '12/17/16',
            time: ' M',
            winningNumber: [5, 0]
          }, {
            date: '11/22/16',
            time: ' M',
            winningNumber: [6, 5]
          }, {
            date: '02/04/17',
            time: ' E',
            winningNumber: [2, 7]
          }, {
            date: '01/10/17',
            time: ' E',
            winningNumber: [4, 5]
          }, {
            date: '12/16/16',
            time: ' E',
            winningNumber: [4, 5]
          }, {
            date: '11/21/16',
            time: ' E',
            winningNumber: [6, 7]
          }, {
            date: '02/04/17',
            time: ' M',
            winningNumber: [7, 3]
          }, {
            date: '01/10/17',
            time: ' M',
            winningNumber: [7, 7]
          }, {
            date: '12/16/16',
            time: ' M',
            winningNumber: [8, 8]
          }, {
            date: '11/21/16',
            time: ' M',
            winningNumber: [7, 4]
          }, {
            date: '02/03/17',
            time: ' E',
            winningNumber: [3, 0]
          }, {
            date: '01/09/17',
            time: ' E',
            winningNumber: [8, 0]
          }, {
            date: '12/15/16',
            time: ' E',
            winningNumber: [9, 6]
          }, {
            date: '11/20/16',
            time: ' E',
            winningNumber: [3, 0]
          }, {
            date: '02/03/17',
            time: ' M',
            winningNumber: [7, 7]
          }, {
            date: '01/09/17',
            time: ' M',
            winningNumber: [0, 2]
          }, {
            date: '12/15/16',
            time: ' M',
            winningNumber: [4, 5]
          }, {
            date: '11/20/16',
            time: ' M',
            winningNumber: [4, 1]
          }, {
            date: '02/02/17',
            time: ' E',
            winningNumber: [5, 9]
          }, {
            date: '01/08/17',
            time: ' E',
            winningNumber: [8, 1]
          }, {
            date: '12/14/16',
            time: ' E',
            winningNumber: [5, 5]
          }, {
            date: '11/19/16',
            time: ' E',
            winningNumber: [2, 0]
          }, {
            date: '02/02/17',
            time: ' M',
            winningNumber: [4, 3]
          }, {
            date: '01/08/17',
            time: ' M',
            winningNumber: [3, 3]
          }, {
            date: '12/14/16',
            time: ' M',
            winningNumber: [6, 3]
          }, {
            date: '11/19/16',
            time: ' M',
            winningNumber: [4, 1]
          }, {
            date: '02/01/17',
            time: ' E',
            winningNumber: [9, 0]
          }, {
            date: '01/07/17',
            time: ' E',
            winningNumber: [4, 8]
          }, {
            date: '12/13/16',
            time: ' E',
            winningNumber: [3, 3]
          }, {
            date: '11/18/16',
            time: ' E',
            winningNumber: [6, 0]
          }, {
            date: '02/01/17',
            time: ' M',
            winningNumber: [3, 9]
          }, {
            date: '01/07/17',
            time: ' M',
            winningNumber: [9, 0]
          }, {
            date: '12/13/16',
            time: ' M',
            winningNumber: [4, 3]
          }, {
            date: '11/18/16',
            time: ' M',
            winningNumber: [7, 0]
          }, {
            date: '01/31/17',
            time: ' E',
            winningNumber: [0, 8]
          }, {
            date: '01/06/17',
            time: ' E',
            winningNumber: [1, 4]
          }, {
            date: '12/12/16',
            time: ' E',
            winningNumber: [1, 0]
          }, {
            date: '11/17/16',
            time: ' E',
            winningNumber: [9, 8]
          }, {
            date: '01/31/17',
            time: ' M',
            winningNumber: [3, 6]
          }, {
            date: '01/06/17',
            time: ' M',
            winningNumber: [9, 3]
          }, {
            date: '12/12/16',
            time: ' M',
            winningNumber: [9, 6]
          }, {
            date: '11/17/16',
            time: ' M',
            winningNumber: [7, 8]
          }, {
            date: '01/30/17',
            time: ' E',
            winningNumber: [1, 2]
          }, {
            date: '01/05/17',
            time: ' E',
            winningNumber: [8, 7]
          }, {
            date: '12/11/16',
            time: ' E',
            winningNumber: [7, 4]
          }, {
            date: '11/16/16',
            time: ' E',
            winningNumber: [5, 8]
          }, {
            date: '01/30/17',
            time: ' M',
            winningNumber: [3, 9]
          }, {
            date: '01/05/17',
            time: ' M',
            winningNumber: [0, 4]
          }, {
            date: '12/11/16',
            time: ' M',
            winningNumber: [1, 8]
          }, {
            date: '11/16/16',
            time: ' M',
            winningNumber: [9, 9]
          }
        ]
      }, {
        name: 'Pick 3',
        valueName: 'pick3',
        lotteryLength: 3,
        maxNumber: 9,
        averageWinnings: 
          {
            straight: 250,
            box: [
              {
                boxWay: '3 ways',
                winnings: 80
              }, {
                boxWay: '6 ways',
                winnings: 40
              }
            ]

          }
        ,
        winningHistory: [
          {
            date: '12/20/17',
            time: 'E',
            winningNumber: [1, 1, 1]
          }, {
            date: '11/25/17',
            time: 'E',
            winningNumber: [0, 4, 2]
          }, {
            date: '10/31/17',
            time: 'E',
            winningNumber: [8, 6, 0]
          }, {
            date: '10/06/17',
            time: 'E',
            winningNumber: [6, 5, 0]
          }, {
            date: '12/20/17',
            time: 'M',
            winningNumber: [0, 8, 5]
          }, {
            date: '11/25/17',
            time: 'M',
            winningNumber: [7, 7, 6]
          }, {
            date: '10/31/17',
            time: 'M',
            winningNumber: [5, 8, 2]
          }, {
            date: '10/06/17',
            time: 'M',
            winningNumber: [4, 9, 7]
          }, {
            date: '12/19/17',
            time: 'E',
            winningNumber: [7, 6, 2]
          }, {
            date: '11/24/17',
            time: 'E',
            winningNumber: [9, 8, 9]
          }, {
            date: '10/30/17',
            time: 'E',
            winningNumber: [6, 4, 0]
          }, {
            date: '10/05/17',
            time: 'E',
            winningNumber: [4, 2, 9]
          }, {
            date: '12/19/17',
            time: 'M',
            winningNumber: [8, 5, 4]
          }, {
            date: '11/24/17',
            time: 'M',
            winningNumber: [6, 0, 8]
          }, {
            date: '10/30/17',
            time: 'M',
            winningNumber: [9, 2, 3]
          }, {
            date: '10/05/17',
            time: 'M',
            winningNumber: [4, 3, 1]
          }, {
            date: '12/18/17',
            time: 'E',
            winningNumber: [5, 3, 6]
          }, {
            date: '11/23/17',
            time: 'E',
            winningNumber: [3, 3, 7]
          }, {
            date: '10/29/17',
            time: 'E',
            winningNumber: [5, 4, 7]
          }, {
            date: '10/04/17',
            time: 'E',
            winningNumber: [6, 5, 0]
          }, {
            date: '12/18/17',
            time: 'M',
            winningNumber: [8, 6, 1]
          }, {
            date: '11/23/17',
            time: 'M',
            winningNumber: [5, 2, 7]
          }, {
            date: '10/29/17',
            time: 'M',
            winningNumber: [8, 7, 3]
          }, {
            date: '10/04/17',
            time: 'M',
            winningNumber: [8, 1, 8]
          }, {
            date: '12/17/17',
            time: 'E',
            winningNumber: [1, 7, 3]
          }, {
            date: '11/22/17',
            time: 'E',
            winningNumber: [5, 3, 5]
          }, {
            date: '10/28/17',
            time: 'E',
            winningNumber: [8, 5, 5]
          }, {
            date: '10/03/17',
            time: 'E',
            winningNumber: [4, 2, 7]
          }, {
            date: '12/17/17',
            time: 'M',
            winningNumber: [2, 0, 6]
          }, {
            date: '11/22/17',
            time: 'M',
            winningNumber: [0, 0, 1]
          }, {
            date: '10/28/17',
            time: 'M',
            winningNumber: [1, 1, 2]
          }, {
            date: '10/03/17',
            time: 'M',
            winningNumber: [5, 6, 2]
          }, {
            date: '12/16/17',
            time: 'E',
            winningNumber: [0, 5, 1]
          }, {
            date: '11/21/17',
            time: 'E',
            winningNumber: [6, 5, 7]
          }, {
            date: '10/27/17',
            time: 'E',
            winningNumber: [9, 7, 6]
          }, {
            date: '10/02/17',
            time: 'E',
            winningNumber: [9, 0, 4]
          }, {
            date: '12/16/17',
            time: 'M',
            winningNumber: [4, 0, 7]
          }, {
            date: '11/21/17',
            time: 'M',
            winningNumber: [0, 3, 8]
          }, {
            date: '10/27/17',
            time: 'M',
            winningNumber: [3, 4, 6]
          }, {
            date: '10/02/17',
            time: 'M',
            winningNumber: [0, 5, 0]
          }, {
            date: '12/15/17',
            time: 'E',
            winningNumber: [2, 8, 7]
          }, {
            date: '11/20/17',
            time: 'E',
            winningNumber: [0, 4, 1]
          }, {
            date: '10/26/17',
            time: 'E',
            winningNumber: [4, 8, 1]
          }, {
            date: '10/01/17',
            time: 'E',
            winningNumber: [8, 4, 3]
          }, {
            date: '12/15/17',
            time: 'M',
            winningNumber: [5, 6, 3]
          }, {
            date: '11/20/17',
            time: 'M',
            winningNumber: [0, 9, 1]
          }, {
            date: '10/26/17',
            time: 'M',
            winningNumber: [3, 0, 9]
          }, {
            date: '10/01/17',
            time: 'M',
            winningNumber: [3, 4, 9]
          }, {
            date: '12/14/17',
            time: 'E',
            winningNumber: [7, 3, 1]
          }, {
            date: '11/19/17',
            time: 'E',
            winningNumber: [4, 3, 5]
          }, {
            date: '10/25/17',
            time: 'E',
            winningNumber: [1, 1, 7]
          }, {
            date: '09/30/17',
            time: 'E',
            winningNumber: [7, 5, 1]
          }, {
            date: '12/14/17',
            time: 'M',
            winningNumber: [7, 9, 6]
          }, {
            date: '11/19/17',
            time: 'M',
            winningNumber: [7, 4, 1]
          }, {
            date: '10/25/17',
            time: 'M',
            winningNumber: [7, 1, 1]
          }, {
            date: '09/30/17',
            time: 'M',
            winningNumber: [4, 0, 3]
          }, {
            date: '12/13/17',
            time: 'E',
            winningNumber: [7, 7, 5]
          }, {
            date: '11/18/17',
            time: 'E',
            winningNumber: [0, 7, 1]
          }, {
            date: '10/24/17',
            time: 'E',
            winningNumber: [4, 8, 7]
          }, {
            date: '09/29/17',
            time: 'E',
            winningNumber: [8, 9, 6]
          }, {
            date: '12/13/17',
            time: 'M',
            winningNumber: [7, 3, 8]
          }, {
            date: '11/18/17',
            time: 'M',
            winningNumber: [0, 5, 5]
          }, {
            date: '10/24/17',
            time: 'M',
            winningNumber: [2, 5, 8]
          }, {
            date: '09/29/17',
            time: 'M',
            winningNumber: [9, 5, 1]
          }, {
            date: '12/12/17',
            time: 'E',
            winningNumber: [6, 5, 9]
          }, {
            date: '11/17/17',
            time: 'E',
            winningNumber: [3, 8, 6]
          }, {
            date: '10/23/17',
            time: 'E',
            winningNumber: [0, 0, 8]
          }, {
            date: '09/28/17',
            time: 'E',
            winningNumber: [2, 2, 2]
          }, {
            date: '12/12/17',
            time: 'M',
            winningNumber: [5, 7, 8]
          }, {
            date: '11/17/17',
            time: 'M',
            winningNumber: [6, 1, 4]
          }, {
            date: '10/23/17',
            time: 'M',
            winningNumber: [8, 7, 0]
          }, {
            date: '09/28/17',
            time: 'M',
            winningNumber: [9, 4, 5]
          }, {
            date: '12/11/17',
            time: 'E',
            winningNumber: [4, 0, 0]
          }, {
            date: '11/16/17',
            time: 'E',
            winningNumber: [4, 7, 0]
          }, {
            date: '10/22/17',
            time: 'E',
            winningNumber: [4, 6, 0]
          }, {
            date: '09/27/17',
            time: 'E',
            winningNumber: [0, 0, 7]
          }, {
            date: '12/11/17',
            time: 'M',
            winningNumber: [2, 5, 1]
          }, {
            date: '11/16/17',
            time: 'M',
            winningNumber: [8, 3, 0]
          }, {
            date: '10/22/17',
            time: 'M',
            winningNumber: [8, 5, 8]
          }, {
            date: '09/27/17',
            time: 'M',
            winningNumber: [8, 8, 8]
          }, {
            date: '12/10/17',
            time: 'E',
            winningNumber: [6, 0, 0]
          }, {
            date: '11/15/17',
            time: 'E',
            winningNumber: [5, 6, 1]
          }, {
            date: '10/21/17',
            time: 'E',
            winningNumber: [3, 7, 3]
          }, {
            date: '09/26/17',
            time: 'E',
            winningNumber: [1, 1, 9]
          }, {
            date: '12/10/17',
            time: 'M',
            winningNumber: [1, 7, 7]
          }, {
            date: '11/15/17',
            time: 'M',
            winningNumber: [0, 2, 7]
          }, {
            date: '10/21/17',
            time: 'M',
            winningNumber: [0, 2, 7]
          }, {
            date: '09/26/17',
            time: 'M',
            winningNumber: [7, 0, 5]
          }, {
            date: '12/09/17',
            time: 'E',
            winningNumber: [3, 3, 0]
          }, {
            date: '11/14/17',
            time: 'E',
            winningNumber: [3, 7, 8]
          }, {
            date: '10/20/17',
            time: 'E',
            winningNumber: [8, 2, 4]
          }, {
            date: '09/25/17',
            time: 'E',
            winningNumber: [2, 7, 2]
          }, {
            date: '12/09/17',
            time: 'M',
            winningNumber: [1, 7, 1]
          }, {
            date: '11/14/17',
            time: 'M',
            winningNumber: [7, 0, 2]
          }, {
            date: '10/20/17',
            time: 'M',
            winningNumber: [5, 0, 8]
          }, {
            date: '09/25/17',
            time: 'M',
            winningNumber: [6, 9, 2]
          }, {
            date: '12/08/17',
            time: 'E',
            winningNumber: [8, 6, 2]
          }, {
            date: '11/13/17',
            time: 'E',
            winningNumber: [0, 3, 6]
          }, {
            date: '10/19/17',
            time: 'E',
            winningNumber: [9, 4, 0]
          }, {
            date: '09/24/17',
            time: 'E',
            winningNumber: [7, 3, 4]
          }, {
            date: '12/08/17',
            time: 'M',
            winningNumber: [4, 9, 9]
          }, {
            date: '11/13/17',
            time: 'M',
            winningNumber: [4, 1, 9]
          }, {
            date: '10/19/17',
            time: 'M',
            winningNumber: [7, 1, 8]
          }, {
            date: '09/24/17',
            time: 'M',
            winningNumber: [6, 5, 1]
          }, {
            date: '12/07/17',
            time: 'E',
            winningNumber: [5, 4, 9]
          }, {
            date: '11/12/17',
            time: 'E',
            winningNumber: [4, 2, 7]
          }, {
            date: '10/18/17',
            time: 'E',
            winningNumber: [1, 7, 7]
          }, {
            date: '09/23/17',
            time: 'E',
            winningNumber: [4, 6, 4]
          }, {
            date: '12/07/17',
            time: 'M',
            winningNumber: [2, 7, 2]
          }, {
            date: '11/12/17',
            time: 'M',
            winningNumber: [6, 7, 6]
          }, {
            date: '10/18/17',
            time: 'M',
            winningNumber: [4, 0, 5]
          }, {
            date: '09/23/17',
            time: 'M',
            winningNumber: [7, 9, 1]
          }, {
            date: '12/06/17',
            time: 'E',
            winningNumber: [9, 2, 5]
          }, {
            date: '11/11/17',
            time: 'E',
            winningNumber: [9, 5, 9]
          }, {
            date: '10/17/17',
            time: 'E',
            winningNumber: [1, 5, 7]
          }, {
            date: '09/22/17',
            time: 'E',
            winningNumber: [6, 0, 1]
          }, {
            date: '12/06/17',
            time: 'M',
            winningNumber: [7, 1, 0]
          }, {
            date: '11/11/17',
            time: 'M',
            winningNumber: [1, 2, 2]
          }, {
            date: '10/17/17',
            time: 'M',
            winningNumber: [4, 4, 7]
          }, {
            date: '09/22/17',
            time: 'M',
            winningNumber: [6, 2, 5]
          }, {
            date: '12/05/17',
            time: 'E',
            winningNumber: [9, 3, 7]
          }, {
            date: '11/10/17',
            time: 'E',
            winningNumber: [6, 6, 1]
          }, {
            date: '10/16/17',
            time: 'E',
            winningNumber: [2, 3, 9]
          }, {
            date: '09/21/17',
            time: 'E',
            winningNumber: [1, 6, 1]
          }, {
            date: '12/05/17',
            time: 'M',
            winningNumber: [5, 9, 3]
          }, {
            date: '11/10/17',
            time: 'M',
            winningNumber: [0, 3, 2]
          }, {
            date: '10/16/17',
            time: 'M',
            winningNumber: [1, 3, 1]
          }, {
            date: '09/21/17',
            time: 'M',
            winningNumber: [3, 2, 5]
          }, {
            date: '12/04/17',
            time: 'E',
            winningNumber: [9, 8, 5]
          }, {
            date: '11/09/17',
            time: 'E',
            winningNumber: [3, 8, 3]
          }, {
            date: '10/15/17',
            time: 'E',
            winningNumber: [2, 4, 5]
          }, {
            date: '09/20/17',
            time: 'E',
            winningNumber: [0, 8, 2]
          }, {
            date: '12/04/17',
            time: 'M',
            winningNumber: [8, 9, 4]
          }, {
            date: '11/09/17',
            time: 'M',
            winningNumber: [6, 2, 2]
          }, {
            date: '10/15/17',
            time: 'M',
            winningNumber: [1, 2, 7]
          }, {
            date: '09/20/17',
            time: 'M',
            winningNumber: [7, 6, 2]
          }, {
            date: '12/03/17',
            time: 'E',
            winningNumber: [6, 6, 8]
          }, {
            date: '11/08/17',
            time: 'E',
            winningNumber: [3, 0, 1]
          }, {
            date: '10/14/17',
            time: 'E',
            winningNumber: [0, 2, 1]
          }, {
            date: '09/19/17',
            time: 'E',
            winningNumber: [6, 4, 2]
          }, {
            date: '12/03/17',
            time: 'M',
            winningNumber: [4, 6, 7]
          }, {
            date: '11/08/17',
            time: 'M',
            winningNumber: [3, 6, 0]
          }, {
            date: '10/14/17',
            time: 'M',
            winningNumber: [4, 5, 2]
          }, {
            date: '09/19/17',
            time: 'M',
            winningNumber: [2, 2, 4]
          }, {
            date: '12/02/17',
            time: 'E',
            winningNumber: [5, 7, 9]
          }, {
            date: '11/07/17',
            time: 'E',
            winningNumber: [3, 4, 5]
          }, {
            date: '10/13/17',
            time: 'E',
            winningNumber: [0, 4, 1]
          }, {
            date: '09/18/17',
            time: 'E',
            winningNumber: [8, 9, 5]
          }, {
            date: '12/02/17',
            time: 'M',
            winningNumber: [4, 7, 8]
          }, {
            date: '11/07/17',
            time: 'M',
            winningNumber: [7, 9, 0]
          }, {
            date: '10/13/17',
            time: 'M',
            winningNumber: [7, 7, 9]
          }, {
            date: '09/18/17',
            time: 'M',
            winningNumber: [7, 1, 6]
          }, {
            date: '12/01/17',
            time: 'E',
            winningNumber: [7, 8, 8]
          }, {
            date: '11/06/17',
            time: 'E',
            winningNumber: [8, 6, 0]
          }, {
            date: '10/12/17',
            time: 'E',
            winningNumber: [4, 7, 7]
          }, {
            date: '09/17/17',
            time: 'E',
            winningNumber: [1, 4, 4]
          }, {
            date: '12/01/17',
            time: 'M',
            winningNumber: [3, 1, 7]
          }, {
            date: '11/06/17',
            time: 'M',
            winningNumber: [6, 7, 4]
          }, {
            date: '10/12/17',
            time: 'M',
            winningNumber: [4, 2, 5]
          }, {
            date: '09/17/17',
            time: 'M',
            winningNumber: [1, 8, 2]
          }, {
            date: '11/30/17',
            time: 'E',
            winningNumber: [3, 6, 2]
          }, {
            date: '11/05/17',
            time: 'E',
            winningNumber: [4, 9, 5]
          }, {
            date: '10/11/17',
            time: 'E',
            winningNumber: [9, 5, 9]
          }, {
            date: '09/16/17',
            time: 'E',
            winningNumber: [6, 4, 1]
          }, {
            date: '11/30/17',
            time: 'M',
            winningNumber: [0, 2, 6]
          }, {
            date: '11/05/17',
            time: 'M',
            winningNumber: [2, 6, 1]
          }, {
            date: '10/11/17',
            time: 'M',
            winningNumber: [9, 2, 5]
          }, {
            date: '09/16/17',
            time: 'M',
            winningNumber: [2, 1, 4]
          }, {
            date: '11/29/17',
            time: 'E',
            winningNumber: [7, 3, 3]
          }, {
            date: '11/04/17',
            time: 'E',
            winningNumber: [0, 6, 1]
          }, {
            date: '10/10/17',
            time: 'E',
            winningNumber: [2, 7, 8]
          }, {
            date: '09/15/17',
            time: 'E',
            winningNumber: [9, 7, 2]
          }, {
            date: '11/29/17',
            time: 'M',
            winningNumber: [4, 9, 5]
          }, {
            date: '11/04/17',
            time: 'M',
            winningNumber: [0, 8, 2]
          }, {
            date: '10/10/17',
            time: 'M',
            winningNumber: [5, 5, 3]
          }, {
            date: '09/15/17',
            time: 'M',
            winningNumber: [4, 2, 2]
          }, {
            date: '11/28/17',
            time: 'E',
            winningNumber: [3, 0, 2]
          }, {
            date: '11/03/17',
            time: 'E',
            winningNumber: [4, 7, 3]
          }, {
            date: '10/09/17',
            time: 'E',
            winningNumber: [4, 9, 6]
          }, {
            date: '09/14/17',
            time: 'E',
            winningNumber: [0, 8, 8]
          }, {
            date: '11/28/17',
            time: 'M',
            winningNumber: [3, 5, 7]
          }, {
            date: '11/03/17',
            time: 'M',
            winningNumber: [7, 9, 4]
          }, {
            date: '10/09/17',
            time: 'M',
            winningNumber: [1, 7, 4]
          }, {
            date: '09/14/17',
            time: 'M',
            winningNumber: [5, 2, 8]
          }, {
            date: '11/27/17',
            time: 'E',
            winningNumber: [1, 0, 3]
          }, {
            date: '11/02/17',
            time: 'E',
            winningNumber: [5, 6, 4]
          }, {
            date: '10/08/17',
            time: 'E',
            winningNumber: [8, 1, 5]
          }, {
            date: '09/13/17',
            time: 'E',
            winningNumber: [6, 4, 7]
          }, {
            date: '11/27/17',
            time: 'M',
            winningNumber: [4, 1, 9]
          }, {
            date: '11/02/17',
            time: 'M',
            winningNumber: [9, 4, 6]
          }, {
            date: '10/08/17',
            time: 'M',
            winningNumber: [9, 1, 1]
          }, {
            date: '09/13/17',
            time: 'M',
            winningNumber: [5, 8, 0]
          }, {
            date: '11/26/17',
            time: 'E',
            winningNumber: [0, 0, 9]
          }, {
            date: '11/01/17',
            time: 'E',
            winningNumber: [0, 5, 2]
          }, {
            date: '10/07/17',
            time: 'E',
            winningNumber: [6, 0, 5]
          }, {
            date: '09/12/17',
            time: 'E',
            winningNumber: [6, 0, 1]
          }, {
            date: '11/26/17',
            time: 'M',
            winningNumber: [0, 3, 4]
          }, {
            date: '11/01/17',
            time: 'M',
            winningNumber: [6, 6, 9]
          }, {
            date: '10/07/17',
            time: 'M',
            winningNumber: [2, 2, 0]
          }, {
            date: '09/12/17',
            time: 'M',
            winningNumber: [8, 9, 5]
          }, {
            date: '09/11/17',
            time: 'E',
            winningNumber: [0, 5, 0]
          }, {
            date: '08/17/17',
            time: 'E',
            winningNumber: [4, 5, 2]
          }, {
            date: '07/23/17',
            time: 'E',
            winningNumber: [9, 8, 5]
          }, {
            date: '06/28/17',
            time: 'E',
            winningNumber: [5, 9, 9]
          }, {
            date: '09/11/17',
            time: 'M',
            winningNumber: [6, 7, 2]
          }, {
            date: '08/17/17',
            time: 'M',
            winningNumber: [4, 7, 8]
          }, {
            date: '07/23/17',
            time: 'M',
            winningNumber: [7, 8, 9]
          }, {
            date: '06/28/17',
            time: 'M',
            winningNumber: [6, 0, 9]
          }, {
            date: '09/10/17',
            time: 'E',
            winningNumber: [7, 9, 1]
          }, {
            date: '08/16/17',
            time: 'E',
            winningNumber: [3, 1, 8]
          }, {
            date: '07/22/17',
            time: 'E',
            winningNumber: [6, 9, 4]
          }, {
            date: '06/27/17',
            time: 'E',
            winningNumber: [5, 4, 8]
          }, {
            date: '09/10/17',
            time: 'M',
            winningNumber: [3, 9, 4]
          }, {
            date: '08/16/17',
            time: 'M',
            winningNumber: [8, 5, 5]
          }, {
            date: '07/22/17',
            time: 'M',
            winningNumber: [1, 8, 7]
          }, {
            date: '06/27/17',
            time: 'M',
            winningNumber: [1, 8, 6]
          }, {
            date: '09/09/17',
            time: 'E',
            winningNumber: [1, 6, 8]
          }, {
            date: '08/15/17',
            time: 'E',
            winningNumber: [2, 8, 8]
          }, {
            date: '07/21/17',
            time: 'E',
            winningNumber: [4, 2, 6]
          }, {
            date: '06/26/17',
            time: 'E',
            winningNumber: [6, 8, 0]
          }, {
            date: '09/09/17',
            time: 'M',
            winningNumber: [0, 9, 5]
          }, {
            date: '08/15/17',
            time: 'M',
            winningNumber: [8, 8, 5]
          }, {
            date: '07/21/17',
            time: 'M',
            winningNumber: [9, 0, 8]
          }, {
            date: '06/26/17',
            time: 'M',
            winningNumber: [9, 9, 4]
          }, {
            date: '09/08/17',
            time: 'E',
            winningNumber: [5, 2, 1]
          }, {
            date: '08/14/17',
            time: 'E',
            winningNumber: [3, 0, 8]
          }, {
            date: '07/20/17',
            time: 'E',
            winningNumber: [8, 4, 8]
          }, {
            date: '06/25/17',
            time: 'E',
            winningNumber: [1, 2, 2]
          }, {
            date: '09/08/17',
            time: 'M',
            winningNumber: [6, 6, 5]
          }, {
            date: '08/14/17',
            time: 'M',
            winningNumber: [8, 3, 8]
          }, {
            date: '07/20/17',
            time: 'M',
            winningNumber: [1, 2, 3]
          }, {
            date: '06/25/17',
            time: 'M',
            winningNumber: [0, 4, 8]
          }, {
            date: '09/07/17',
            time: 'E',
            winningNumber: [0, 4, 9]
          }, {
            date: '08/13/17',
            time: 'E',
            winningNumber: [5, 2, 0]
          }, {
            date: '07/19/17',
            time: 'E',
            winningNumber: [9, 7, 2]
          }, {
            date: '06/24/17',
            time: 'E',
            winningNumber: [7, 4, 0]
          }, {
            date: '09/07/17',
            time: 'M',
            winningNumber: [1, 4, 9]
          }, {
            date: '08/13/17',
            time: 'M',
            winningNumber: [6, 6, 9]
          }, {
            date: '07/19/17',
            time: 'M',
            winningNumber: [8, 5, 5]
          }, {
            date: '06/24/17',
            time: 'M',
            winningNumber: [6, 3, 5]
          }, {
            date: '09/06/17',
            time: 'E',
            winningNumber: [6, 2, 3]
          }, {
            date: '08/12/17',
            time: 'E',
            winningNumber: [5, 8, 7]
          }, {
            date: '07/18/17',
            time: 'E',
            winningNumber: [3, 3, 5]
          }, {
            date: '06/23/17',
            time: 'E',
            winningNumber: [1, 0, 0]
          }, {
            date: '09/06/17',
            time: 'M',
            winningNumber: [4, 2, 7]
          }, {
            date: '08/12/17',
            time: 'M',
            winningNumber: [4, 9, 0]
          }, {
            date: '07/18/17',
            time: 'M',
            winningNumber: [3, 1, 2]
          }, {
            date: '06/23/17',
            time: 'M',
            winningNumber: [8, 3, 5]
          }, {
            date: '09/05/17',
            time: 'E',
            winningNumber: [7, 3, 8]
          }, {
            date: '08/11/17',
            time: 'E',
            winningNumber: [2, 9, 0]
          }, {
            date: '07/17/17',
            time: 'E',
            winningNumber: [5, 1, 1]
          }, {
            date: '06/22/17',
            time: 'E',
            winningNumber: [3, 0, 3]
          }, {
            date: '09/05/17',
            time: 'M',
            winningNumber: [3, 3, 6]
          }, {
            date: '08/11/17',
            time: 'M',
            winningNumber: [9, 9, 8]
          }, {
            date: '07/17/17',
            time: 'M',
            winningNumber: [0, 3, 2]
          }, {
            date: '06/22/17',
            time: 'M',
            winningNumber: [0, 9, 4]
          }, {
            date: '09/04/17',
            time: 'E',
            winningNumber: [6, 8, 7]
          }, {
            date: '08/10/17',
            time: 'E',
            winningNumber: [6, 3, 9]
          }, {
            date: '07/16/17',
            time: 'E',
            winningNumber: [1, 0, 9]
          }, {
            date: '06/21/17',
            time: 'E',
            winningNumber: [2, 7, 2]
          }, {
            date: '09/04/17',
            time: 'M',
            winningNumber: [5, 8, 8]
          }, {
            date: '08/10/17',
            time: 'M',
            winningNumber: [2, 6, 9]
          }, {
            date: '07/16/17',
            time: 'M',
            winningNumber: [7, 7, 6]
          }, {
            date: '06/21/17',
            time: 'M',
            winningNumber: [5, 8, 8]
          }, {
            date: '09/03/17',
            time: 'E',
            winningNumber: [8, 2, 3]
          }, {
            date: '08/09/17',
            time: 'E',
            winningNumber: [2, 8, 9]
          }, {
            date: '07/15/17',
            time: 'E',
            winningNumber: [8, 9, 8]
          }, {
            date: '06/20/17',
            time: 'E',
            winningNumber: [9, 6, 1]
          }, {
            date: '09/03/17',
            time: 'M',
            winningNumber: [9, 8, 7]
          }, {
            date: '08/09/17',
            time: 'M',
            winningNumber: [3, 4, 3]
          }, {
            date: '07/15/17',
            time: 'M',
            winningNumber: [7, 2, 5]
          }, {
            date: '06/20/17',
            time: 'M',
            winningNumber: [6, 6, 2]
          }, {
            date: '09/02/17',
            time: 'E',
            winningNumber: [7, 9, 8]
          }, {
            date: '08/08/17',
            time: 'E',
            winningNumber: [2, 7, 2]
          }, {
            date: '07/14/17',
            time: 'E',
            winningNumber: [5, 4, 0]
          }, {
            date: '06/19/17',
            time: 'E',
            winningNumber: [9, 4, 6]
          }, {
            date: '09/02/17',
            time: 'M',
            winningNumber: [2, 0, 1]
          }, {
            date: '08/08/17',
            time: 'M',
            winningNumber: [7, 7, 4]
          }, {
            date: '07/14/17',
            time: 'M',
            winningNumber: [4, 1, 1]
          }, {
            date: '06/19/17',
            time: 'M',
            winningNumber: [5, 9, 8]
          }, {
            date: '09/01/17',
            time: 'E',
            winningNumber: [9, 5, 0]
          }, {
            date: '08/07/17',
            time: 'E',
            winningNumber: [7, 4, 6]
          }, {
            date: '07/13/17',
            time: 'E',
            winningNumber: [5, 0, 9]
          }, {
            date: '06/18/17',
            time: 'E',
            winningNumber: [3, 0, 6]
          }, {
            date: '09/01/17',
            time: 'M',
            winningNumber: [5, 9, 9]
          }, {
            date: '08/07/17',
            time: 'M',
            winningNumber: [5, 0, 8]
          }, {
            date: '07/13/17',
            time: 'M',
            winningNumber: [3, 3, 5]
          }, {
            date: '06/18/17',
            time: 'M',
            winningNumber: [3, 0, 3]
          }, {
            date: '08/31/17',
            time: 'E',
            winningNumber: [5, 3, 6]
          }, {
            date: '08/06/17',
            time: 'E',
            winningNumber: [4, 1, 0]
          }, {
            date: '07/12/17',
            time: 'E',
            winningNumber: [1, 5, 0]
          }, {
            date: '06/17/17',
            time: 'E',
            winningNumber: [4, 0, 5]
          }, {
            date: '08/31/17',
            time: 'M',
            winningNumber: [1, 5, 7]
          }, {
            date: '08/06/17',
            time: 'M',
            winningNumber: [2, 2, 5]
          }, {
            date: '07/12/17',
            time: 'M',
            winningNumber: [9, 0, 0]
          }, {
            date: '06/17/17',
            time: 'M',
            winningNumber: [0, 6, 9]
          }, {
            date: '08/30/17',
            time: 'E',
            winningNumber: [1, 0, 7]
          }, {
            date: '08/05/17',
            time: 'E',
            winningNumber: [8, 3, 7]
          }, {
            date: '07/11/17',
            time: 'E',
            winningNumber: [5, 1, 5]
          }, {
            date: '06/16/17',
            time: 'E',
            winningNumber: [8, 1, 6]
          }, {
            date: '08/30/17',
            time: 'M',
            winningNumber: [1, 5, 2]
          }, {
            date: '08/05/17',
            time: 'M',
            winningNumber: [7, 0, 1]
          }, {
            date: '07/11/17',
            time: 'M',
            winningNumber: [2, 7, 6]
          }, {
            date: '06/16/17',
            time: 'M',
            winningNumber: [6, 6, 6]
          }, {
            date: '08/29/17',
            time: 'E',
            winningNumber: [3, 7, 4]
          }, {
            date: '08/04/17',
            time: 'E',
            winningNumber: [2, 8, 2]
          }, {
            date: '07/10/17',
            time: 'E',
            winningNumber: [2, 1, 6]
          }, {
            date: '06/15/17',
            time: 'E',
            winningNumber: [2, 0, 5]
          }, {
            date: '08/29/17',
            time: 'M',
            winningNumber: [1, 3, 3]
          }, {
            date: '08/04/17',
            time: 'M',
            winningNumber: [9, 9, 9]
          }, {
            date: '07/10/17',
            time: 'M',
            winningNumber: [9, 7, 0]
          }, {
            date: '06/15/17',
            time: 'M',
            winningNumber: [3, 8, 9]
          }, {
            date: '08/28/17',
            time: 'E',
            winningNumber: [5, 1, 4]
          }, {
            date: '08/03/17',
            time: 'E',
            winningNumber: [3, 2, 1]
          }, {
            date: '07/09/17',
            time: 'E',
            winningNumber: [5, 8, 0]
          }, {
            date: '06/14/17',
            time: 'E',
            winningNumber: [7, 9, 9]
          }, {
            date: '08/28/17',
            time: 'M',
            winningNumber: [1, 6, 3]
          }, {
            date: '08/03/17',
            time: 'M',
            winningNumber: [4, 1, 9]
          }, {
            date: '07/09/17',
            time: 'M',
            winningNumber: [7, 4, 1]
          }, {
            date: '06/14/17',
            time: 'M',
            winningNumber: [8, 8, 7]
          }, {
            date: '08/27/17',
            time: 'E',
            winningNumber: [5, 5, 0]
          }, {
            date: '08/02/17',
            time: 'E',
            winningNumber: [3, 6, 7]
          }, {
            date: '07/08/17',
            time: 'E',
            winningNumber: [1, 5, 2]
          }, {
            date: '06/13/17',
            time: 'E',
            winningNumber: [7, 2, 6]
          }, {
            date: '08/27/17',
            time: 'M',
            winningNumber: [2, 1, 7]
          }, {
            date: '08/02/17',
            time: 'M',
            winningNumber: [2, 9, 8]
          }, {
            date: '07/08/17',
            time: 'M',
            winningNumber: [9, 1, 5]
          }, {
            date: '06/13/17',
            time: 'M',
            winningNumber: [2, 6, 6]
          }, {
            date: '08/26/17',
            time: 'E',
            winningNumber: [4, 1, 5]
          }, {
            date: '08/01/17',
            time: 'E',
            winningNumber: [6, 6, 2]
          }, {
            date: '07/07/17',
            time: 'E',
            winningNumber: [4, 1, 3]
          }, {
            date: '06/12/17',
            time: 'E',
            winningNumber: [8, 7, 1]
          }, {
            date: '08/26/17',
            time: 'M',
            winningNumber: [9, 4, 0]
          }, {
            date: '08/01/17',
            time: 'M',
            winningNumber: [3, 2, 2]
          }, {
            date: '07/07/17',
            time: 'M',
            winningNumber: [1, 3, 4]
          }, {
            date: '06/12/17',
            time: 'M',
            winningNumber: [9, 3, 4]
          }, {
            date: '08/25/17',
            time: 'E',
            winningNumber: [8, 1, 3]
          }, {
            date: '07/31/17',
            time: 'E',
            winningNumber: [1, 7, 8]
          }, {
            date: '07/06/17',
            time: 'E',
            winningNumber: [0, 1, 6]
          }, {
            date: '06/11/17',
            time: 'E',
            winningNumber: [5, 3, 1]
          }, {
            date: '08/25/17',
            time: 'M',
            winningNumber: [7, 2, 0]
          }, {
            date: '07/31/17',
            time: 'M',
            winningNumber: [8, 2, 2]
          }, {
            date: '07/06/17',
            time: 'M',
            winningNumber: [2, 2, 1]
          }, {
            date: '06/11/17',
            time: 'M',
            winningNumber: [9, 2, 6]
          }, {
            date: '08/24/17',
            time: 'E',
            winningNumber: [6, 0, 6]
          }, {
            date: '07/30/17',
            time: 'E',
            winningNumber: [6, 9, 7]
          }, {
            date: '07/05/17',
            time: 'E',
            winningNumber: [8, 0, 9]
          }, {
            date: '06/10/17',
            time: 'E',
            winningNumber: [5, 7, 3]
          }, {
            date: '08/24/17',
            time: 'M',
            winningNumber: [9, 8, 5]
          }, {
            date: '07/30/17',
            time: 'M',
            winningNumber: [1, 5, 2]
          }, {
            date: '07/05/17',
            time: 'M',
            winningNumber: [6, 2, 4]
          }, {
            date: '06/10/17',
            time: 'M',
            winningNumber: [0, 0, 6]
          }, {
            date: '08/23/17',
            time: 'E',
            winningNumber: [1, 3, 4]
          }, {
            date: '07/29/17',
            time: 'E',
            winningNumber: [0, 5, 8]
          }, {
            date: '07/04/17',
            time: 'E',
            winningNumber: [6, 4, 5]
          }, {
            date: '06/09/17',
            time: 'E',
            winningNumber: [1, 5, 1]
          }, {
            date: '08/23/17',
            time: 'M',
            winningNumber: [2, 2, 2]
          }, {
            date: '07/29/17',
            time: 'M',
            winningNumber: [6, 6, 0]
          }, {
            date: '07/04/17',
            time: 'M',
            winningNumber: [6, 0, 8]
          }, {
            date: '06/09/17',
            time: 'M',
            winningNumber: [7, 9, 0]
          }, {
            date: '08/22/17',
            time: 'E',
            winningNumber: [9, 4, 7]
          }, {
            date: '07/28/17',
            time: 'E',
            winningNumber: [6, 1, 4]
          }, {
            date: '07/03/17',
            time: 'E',
            winningNumber: [4, 4, 9]
          }, {
            date: '06/08/17',
            time: 'E',
            winningNumber: [0, 7, 2]
          }, {
            date: '08/22/17',
            time: 'M',
            winningNumber: [5, 2, 8]
          }, {
            date: '07/28/17',
            time: 'M',
            winningNumber: [0, 1, 2]
          }, {
            date: '07/03/17',
            time: 'M',
            winningNumber: [4, 8, 4]
          }, {
            date: '06/08/17',
            time: 'M',
            winningNumber: [2, 9, 5]
          }, {
            date: '08/21/17',
            time: 'E',
            winningNumber: [8, 2, 8]
          }, {
            date: '07/27/17',
            time: 'E',
            winningNumber: [3, 9, 3]
          }, {
            date: '07/02/17',
            time: 'E',
            winningNumber: [2, 6, 9]
          }, {
            date: '06/07/17',
            time: 'E',
            winningNumber: [0, 5, 6]
          }, {
            date: '08/21/17',
            time: 'M',
            winningNumber: [5, 2, 1]
          }, {
            date: '07/27/17',
            time: 'M',
            winningNumber: [1, 5, 3]
          }, {
            date: '07/02/17',
            time: 'M',
            winningNumber: [6, 3, 3]
          }, {
            date: '06/07/17',
            time: 'M',
            winningNumber: [6, 6, 4]
          }, {
            date: '08/20/17',
            time: 'E',
            winningNumber: [7, 0, 7]
          }, {
            date: '07/26/17',
            time: 'E',
            winningNumber: [2, 9, 6]
          }, {
            date: '07/01/17',
            time: 'E',
            winningNumber: [5, 0, 3]
          }, {
            date: '06/06/17',
            time: 'E',
            winningNumber: [6, 5, 2]
          }, {
            date: '08/20/17',
            time: 'M',
            winningNumber: [8, 4, 8]
          }, {
            date: '07/26/17',
            time: 'M',
            winningNumber: [3, 8, 8]
          }, {
            date: '07/01/17',
            time: 'M',
            winningNumber: [8, 4, 3]
          }, {
            date: '06/06/17',
            time: 'M',
            winningNumber: [4, 9, 9]
          }, {
            date: '08/19/17',
            time: 'E',
            winningNumber: [3, 6, 6]
          }, {
            date: '07/25/17',
            time: 'E',
            winningNumber: [8, 1, 9]
          }, {
            date: '06/30/17',
            time: 'E',
            winningNumber: [8, 0, 1]
          }, {
            date: '06/05/17',
            time: 'E',
            winningNumber: [5, 0, 8]
          }, {
            date: '08/19/17',
            time: 'M',
            winningNumber: [5, 0, 7]
          }, {
            date: '07/25/17',
            time: 'M',
            winningNumber: [1, 3, 0]
          }, {
            date: '06/30/17',
            time: 'M',
            winningNumber: [1, 4, 2]
          }, {
            date: '06/05/17',
            time: 'M',
            winningNumber: [7, 8, 9]
          }, {
            date: '08/18/17',
            time: 'E',
            winningNumber: [5, 2, 4]
          }, {
            date: '07/24/17',
            time: 'E',
            winningNumber: [8, 5, 9]
          }, {
            date: '06/29/17',
            time: 'E',
            winningNumber: [7, 1, 5]
          }, {
            date: '06/04/17',
            time: 'E',
            winningNumber: [2, 2, 8]
          }, {
            date: '08/18/17',
            time: 'M',
            winningNumber: [6, 9, 4]
          }, {
            date: '07/24/17',
            time: 'M',
            winningNumber: [4, 9, 4]
          }, {
            date: '06/29/17',
            time: 'M',
            winningNumber: [6, 1, 4]
          }, {
            date: '06/04/17',
            time: 'M',
            winningNumber: [3, 7, 1]
          }, {
            date: '06/03/17',
            time: 'E',
            winningNumber: [0, 0, 0]
          }, {
            date: '05/09/17',
            time: 'E',
            winningNumber: [4, 8, 2]
          }, {
            date: '04/14/17',
            time: 'E',
            winningNumber: [3, 0, 7]
          }, {
            date: '03/20/17',
            time: 'E',
            winningNumber: [5, 8, 2]
          }, {
            date: '06/03/17',
            time: 'M',
            winningNumber: [5, 4, 5]
          }, {
            date: '05/09/17',
            time: 'M',
            winningNumber: [4, 3, 5]
          }, {
            date: '04/14/17',
            time: 'M',
            winningNumber: [1, 1, 1]
          }, {
            date: '03/20/17',
            time: 'M',
            winningNumber: [6, 0, 8]
          }, {
            date: '06/02/17',
            time: 'E',
            winningNumber: [7, 6, 5]
          }, {
            date: '05/08/17',
            time: 'E',
            winningNumber: [0, 1, 3]
          }, {
            date: '04/13/17',
            time: 'E',
            winningNumber: [4, 3, 1]
          }, {
            date: '03/19/17',
            time: 'E',
            winningNumber: [3, 1, 4]
          }, {
            date: '06/02/17',
            time: 'M',
            winningNumber: [0, 6, 5]
          }, {
            date: '05/08/17',
            time: 'M',
            winningNumber: [2, 2, 9]
          }, {
            date: '04/13/17',
            time: 'M',
            winningNumber: [4, 1, 8]
          }, {
            date: '03/19/17',
            time: 'M',
            winningNumber: [1, 4, 6]
          }, {
            date: '06/01/17',
            time: 'E',
            winningNumber: [3, 0, 1]
          }, {
            date: '05/07/17',
            time: 'E',
            winningNumber: [3, 8, 3]
          }, {
            date: '04/12/17',
            time: 'E',
            winningNumber: [5, 3, 9]
          }, {
            date: '03/18/17',
            time: 'E',
            winningNumber: [9, 9, 5]
          }, {
            date: '06/01/17',
            time: 'M',
            winningNumber: [4, 0, 4]
          }, {
            date: '05/07/17',
            time: 'M',
            winningNumber: [1, 2, 6]
          }, {
            date: '04/12/17',
            time: 'M',
            winningNumber: [7, 9, 3]
          }, {
            date: '03/18/17',
            time: 'M',
            winningNumber: [5, 9, 1]
          }, {
            date: '05/31/17',
            time: 'E',
            winningNumber: [2, 2, 4]
          }, {
            date: '05/06/17',
            time: 'E',
            winningNumber: [3, 7, 7]
          }, {
            date: '04/11/17',
            time: 'E',
            winningNumber: [6, 9, 3]
          }, {
            date: '03/17/17',
            time: 'E',
            winningNumber: [3, 4, 7]
          }, {
            date: '05/31/17',
            time: 'M',
            winningNumber: [7, 0, 4]
          }, {
            date: '05/06/17',
            time: 'M',
            winningNumber: [1, 1, 2]
          }, {
            date: '04/11/17',
            time: 'M',
            winningNumber: [4, 6, 1]
          }, {
            date: '03/17/17',
            time: 'M',
            winningNumber: [4, 6, 0]
          }, {
            date: '05/30/17',
            time: 'E',
            winningNumber: [1, 3, 8]
          }, {
            date: '05/05/17',
            time: 'E',
            winningNumber: [6, 6, 7]
          }, {
            date: '04/10/17',
            time: 'E',
            winningNumber: [9, 1, 2]
          }, {
            date: '03/16/17',
            time: 'E',
            winningNumber: [4, 5, 2]
          }, {
            date: '05/30/17',
            time: 'M',
            winningNumber: [6, 9, 2]
          }, {
            date: '05/05/17',
            time: 'M',
            winningNumber: [6, 2, 6]
          }, {
            date: '04/10/17',
            time: 'M',
            winningNumber: [4, 2, 5]
          }, {
            date: '03/16/17',
            time: 'M',
            winningNumber: [9, 4, 6]
          }, {
            date: '05/29/17',
            time: 'E',
            winningNumber: [6, 4, 7]
          }, {
            date: '05/04/17',
            time: 'E',
            winningNumber: [0, 8, 4]
          }, {
            date: '04/09/17',
            time: 'E',
            winningNumber: [4, 7, 6]
          }, {
            date: '03/15/17',
            time: 'E',
            winningNumber: [5, 9, 9]
          }, {
            date: '05/29/17',
            time: 'M',
            winningNumber: [7, 9, 4]
          }, {
            date: '05/04/17',
            time: 'M',
            winningNumber: [4, 9, 7]
          }, {
            date: '04/09/17',
            time: 'M',
            winningNumber: [0, 4, 6]
          }, {
            date: '03/15/17',
            time: 'M',
            winningNumber: [8, 1, 9]
          }, {
            date: '05/28/17',
            time: 'E',
            winningNumber: [4, 9, 0]
          }, {
            date: '05/03/17',
            time: 'E',
            winningNumber: [1, 9, 2]
          }, {
            date: '04/08/17',
            time: 'E',
            winningNumber: [0, 9, 4]
          }, {
            date: '03/14/17',
            time: 'E',
            winningNumber: [5, 0, 4]
          }, {
            date: '05/28/17',
            time: 'M',
            winningNumber: [0, 6, 5]
          }, {
            date: '05/03/17',
            time: 'M',
            winningNumber: [8, 7, 0]
          }, {
            date: '04/08/17',
            time: 'M',
            winningNumber: [7, 7, 5]
          }, {
            date: '03/14/17',
            time: 'M',
            winningNumber: [6, 2, 7]
          }, {
            date: '05/27/17',
            time: 'E',
            winningNumber: [8, 5, 2]
          }, {
            date: '05/02/17',
            time: 'E',
            winningNumber: [9, 8, 8]
          }, {
            date: '04/07/17',
            time: 'E',
            winningNumber: [2, 1, 3]
          }, {
            date: '03/13/17',
            time: 'E',
            winningNumber: [2, 5, 9]
          }, {
            date: '05/27/17',
            time: 'M',
            winningNumber: [8, 3, 3]
          }, {
            date: '05/02/17',
            time: 'M',
            winningNumber: [5, 5, 7]
          }, {
            date: '04/07/17',
            time: 'M',
            winningNumber: [2, 3, 1]
          }, {
            date: '03/13/17',
            time: 'M',
            winningNumber: [9, 2, 8]
          }, {
            date: '05/26/17',
            time: 'E',
            winningNumber: [9, 0, 9]
          }, {
            date: '05/01/17',
            time: 'E',
            winningNumber: [8, 7, 2]
          }, {
            date: '04/06/17',
            time: 'E',
            winningNumber: [7, 8, 3]
          }, {
            date: '03/12/17',
            time: 'E',
            winningNumber: [2, 6, 0]
          }, {
            date: '05/26/17',
            time: 'M',
            winningNumber: [0, 7, 0]
          }, {
            date: '05/01/17',
            time: 'M',
            winningNumber: [9, 7, 0]
          }, {
            date: '04/06/17',
            time: 'M',
            winningNumber: [5, 4, 1]
          }, {
            date: '03/12/17',
            time: 'M',
            winningNumber: [5, 5, 8]
          }, {
            date: '05/25/17',
            time: 'E',
            winningNumber: [0, 5, 4]
          }, {
            date: '04/30/17',
            time: 'E',
            winningNumber: [5, 3, 0]
          }, {
            date: '04/05/17',
            time: 'E',
            winningNumber: [2, 9, 4]
          }, {
            date: '03/11/17',
            time: 'E',
            winningNumber: [0, 2, 2]
          }, {
            date: '05/25/17',
            time: 'M',
            winningNumber: [2, 4, 7]
          }, {
            date: '04/30/17',
            time: 'M',
            winningNumber: [9, 1, 4]
          }, {
            date: '04/05/17',
            time: 'M',
            winningNumber: [4, 8, 7]
          }, {
            date: '03/11/17',
            time: 'M',
            winningNumber: [6, 5, 3]
          }, {
            date: '05/24/17',
            time: 'E',
            winningNumber: [9, 0, 2]
          }, {
            date: '04/29/17',
            time: 'E',
            winningNumber: [8, 3, 6]
          }, {
            date: '04/04/17',
            time: 'E',
            winningNumber: [4, 8, 6]
          }, {
            date: '03/10/17',
            time: 'E',
            winningNumber: [1, 1, 8]
          }, {
            date: '05/24/17',
            time: 'M',
            winningNumber: [4, 2, 1]
          }, {
            date: '04/29/17',
            time: 'M',
            winningNumber: [0, 1, 0]
          }, {
            date: '04/04/17',
            time: 'M',
            winningNumber: [3, 6, 2]
          }, {
            date: '03/10/17',
            time: 'M',
            winningNumber: [4, 8, 2]
          }, {
            date: '05/23/17',
            time: 'E',
            winningNumber: [5, 3, 5]
          }, {
            date: '04/28/17',
            time: 'E',
            winningNumber: [8, 6, 8]
          }, {
            date: '04/03/17',
            time: 'E',
            winningNumber: [8, 3, 4]
          }, {
            date: '03/09/17',
            time: 'E',
            winningNumber: [2, 6, 5]
          }, {
            date: '05/23/17',
            time: 'M',
            winningNumber: [4, 7, 2]
          }, {
            date: '04/28/17',
            time: 'M',
            winningNumber: [9, 9, 8]
          }, {
            date: '04/03/17',
            time: 'M',
            winningNumber: [2, 1, 9]
          }, {
            date: '03/09/17',
            time: 'M',
            winningNumber: [2, 7, 5]
          }, {
            date: '05/22/17',
            time: 'E',
            winningNumber: [2, 4, 0]
          }, {
            date: '04/27/17',
            time: 'E',
            winningNumber: [4, 3, 9]
          }, {
            date: '04/02/17',
            time: 'E',
            winningNumber: [0, 8, 8]
          }, {
            date: '03/08/17',
            time: 'E',
            winningNumber: [6, 1, 2]
          }, {
            date: '05/22/17',
            time: 'M',
            winningNumber: [8, 9, 1]
          }, {
            date: '04/27/17',
            time: 'M',
            winningNumber: [5, 5, 6]
          }, {
            date: '04/02/17',
            time: 'M',
            winningNumber: [1, 4, 3]
          }, {
            date: '03/08/17',
            time: 'M',
            winningNumber: [5, 5, 4]
          }, {
            date: '05/21/17',
            time: 'E',
            winningNumber: [4, 7, 7]
          }, {
            date: '04/26/17',
            time: 'E',
            winningNumber: [8, 8, 9]
          }, {
            date: '04/01/17',
            time: 'E',
            winningNumber: [4, 8, 0]
          }, {
            date: '03/07/17',
            time: 'E',
            winningNumber: [4, 1, 0]
          }, {
            date: '05/21/17',
            time: 'M',
            winningNumber: [8, 7, 3]
          }, {
            date: '04/26/17',
            time: 'M',
            winningNumber: [5, 2, 1]
          }, {
            date: '04/01/17',
            time: 'M',
            winningNumber: [9, 4, 6]
          }, {
            date: '03/07/17',
            time: 'M',
            winningNumber: [3, 0, 7]
          }, {
            date: '05/20/17',
            time: 'E',
            winningNumber: [2, 8, 5]
          }, {
            date: '04/25/17',
            time: 'E',
            winningNumber: [6, 6, 7]
          }, {
            date: '03/31/17',
            time: 'E',
            winningNumber: [8, 6, 0]
          }, {
            date: '03/06/17',
            time: 'E',
            winningNumber: [4, 3, 0]
          }, {
            date: '05/20/17',
            time: 'M',
            winningNumber: [8, 7, 6]
          }, {
            date: '04/25/17',
            time: 'M',
            winningNumber: [4, 1, 9]
          }, {
            date: '03/31/17',
            time: 'M',
            winningNumber: [9, 0, 0]
          }, {
            date: '03/06/17',
            time: 'M',
            winningNumber: [5, 9, 0]
          }, {
            date: '05/19/17',
            time: 'E',
            winningNumber: [3, 9, 8]
          }, {
            date: '04/24/17',
            time: 'E',
            winningNumber: [4, 8, 2]
          }, {
            date: '03/30/17',
            time: 'E',
            winningNumber: [8, 1, 5]
          }, {
            date: '03/05/17',
            time: 'E',
            winningNumber: [1, 7, 4]
          }, {
            date: '05/19/17',
            time: 'M',
            winningNumber: [9, 0, 4]
          }, {
            date: '04/24/17',
            time: 'M',
            winningNumber: [9, 3, 4]
          }, {
            date: '03/30/17',
            time: 'M',
            winningNumber: [3, 8, 0]
          }, {
            date: '03/05/17',
            time: 'M',
            winningNumber: [3, 5, 7]
          }, {
            date: '05/18/17',
            time: 'E',
            winningNumber: [9, 6, 8]
          }, {
            date: '04/23/17',
            time: 'E',
            winningNumber: [8, 6, 7]
          }, {
            date: '03/29/17',
            time: 'E',
            winningNumber: [2, 1, 9]
          }, {
            date: '03/04/17',
            time: 'E',
            winningNumber: [8, 0, 9]
          }, {
            date: '05/18/17',
            time: 'M',
            winningNumber: [1, 2, 0]
          }, {
            date: '04/23/17',
            time: 'M',
            winningNumber: [0, 4, 4]
          }, {
            date: '03/29/17',
            time: 'M',
            winningNumber: [1, 3, 0]
          }, {
            date: '03/04/17',
            time: 'M',
            winningNumber: [6, 2, 7]
          }, {
            date: '05/17/17',
            time: 'E',
            winningNumber: [3, 8, 3]
          }, {
            date: '04/22/17',
            time: 'E',
            winningNumber: [3, 0, 8]
          }, {
            date: '03/28/17',
            time: 'E',
            winningNumber: [9, 7, 1]
          }, {
            date: '03/03/17',
            time: 'E',
            winningNumber: [5, 8, 7]
          }, {
            date: '05/17/17',
            time: 'M',
            winningNumber: [8, 7, 5]
          }, {
            date: '04/22/17',
            time: 'M',
            winningNumber: [5, 0, 8]
          }, {
            date: '03/28/17',
            time: 'M',
            winningNumber: [4, 1, 3]
          }, {
            date: '03/03/17',
            time: 'M',
            winningNumber: [7, 8, 0]
          }, {
            date: '05/16/17',
            time: 'E',
            winningNumber: [2, 7, 4]
          }, {
            date: '04/21/17',
            time: 'E',
            winningNumber: [3, 7, 3]
          }, {
            date: '03/27/17',
            time: 'E',
            winningNumber: [3, 8, 4]
          }, {
            date: '03/02/17',
            time: 'E',
            winningNumber: [4, 6, 8]
          }, {
            date: '05/16/17',
            time: 'M',
            winningNumber: [0, 2, 1]
          }, {
            date: '04/21/17',
            time: 'M',
            winningNumber: [7, 9, 6]
          }, {
            date: '03/27/17',
            time: 'M',
            winningNumber: [9, 1, 4]
          }, {
            date: '03/02/17',
            time: 'M',
            winningNumber: [4, 8, 8]
          }, {
            date: '05/15/17',
            time: 'E',
            winningNumber: [3, 1, 2]
          }, {
            date: '04/20/17',
            time: 'E',
            winningNumber: [6, 8, 4]
          }, {
            date: '03/26/17',
            time: 'E',
            winningNumber: [7, 2, 2]
          }, {
            date: '03/01/17',
            time: 'E',
            winningNumber: [0, 2, 2]
          }, {
            date: '05/15/17',
            time: 'M',
            winningNumber: [2, 3, 4]
          }, {
            date: '04/20/17',
            time: 'M',
            winningNumber: [4, 9, 8]
          }, {
            date: '03/26/17',
            time: 'M',
            winningNumber: [6, 0, 1]
          }, {
            date: '03/01/17',
            time: 'M',
            winningNumber: [1, 2, 8]
          }, {
            date: '05/14/17',
            time: 'E',
            winningNumber: [5, 0, 5]
          }, {
            date: '04/19/17',
            time: 'E',
            winningNumber: [3, 4, 3]
          }, {
            date: '03/25/17',
            time: 'E',
            winningNumber: [4, 4, 0]
          }, {
            date: '02/28/17',
            time: 'E',
            winningNumber: [0, 5, 7]
          }, {
            date: '05/14/17',
            time: 'M',
            winningNumber: [3, 0, 6]
          }, {
            date: '04/19/17',
            time: 'M',
            winningNumber: [2, 4, 4]
          }, {
            date: '03/25/17',
            time: 'M',
            winningNumber: [4, 2, 2]
          }, {
            date: '02/28/17',
            time: 'M',
            winningNumber: [2, 7, 7]
          }, {
            date: '05/13/17',
            time: 'E',
            winningNumber: [4, 4, 0]
          }, {
            date: '04/18/17',
            time: 'E',
            winningNumber: [9, 3, 8]
          }, {
            date: '03/24/17',
            time: 'E',
            winningNumber: [4, 1, 4]
          }, {
            date: '02/27/17',
            time: 'E',
            winningNumber: [2, 8, 3]
          }, {
            date: '05/13/17',
            time: 'M',
            winningNumber: [5, 7, 9]
          }, {
            date: '04/18/17',
            time: 'M',
            winningNumber: [9, 3, 9]
          }, {
            date: '03/24/17',
            time: 'M',
            winningNumber: [9, 8, 3]
          }, {
            date: '02/27/17',
            time: 'M',
            winningNumber: [5, 1, 0]
          }, {
            date: '05/12/17',
            time: 'E',
            winningNumber: [2, 7, 3]
          }, {
            date: '04/17/17',
            time: 'E',
            winningNumber: [9, 8, 7]
          }, {
            date: '03/23/17',
            time: 'E',
            winningNumber: [2, 6, 1]
          }, {
            date: '02/26/17',
            time: 'E',
            winningNumber: [9, 9, 1]
          }, {
            date: '05/12/17',
            time: 'M',
            winningNumber: [4, 6, 5]
          }, {
            date: '04/17/17',
            time: 'M',
            winningNumber: [0, 5, 5]
          }, {
            date: '03/23/17',
            time: 'M',
            winningNumber: [3, 7, 8]
          }, {
            date: '02/26/17',
            time: 'M',
            winningNumber: [7, 5, 2]
          }, {
            date: '05/11/17',
            time: 'E',
            winningNumber: [3, 5, 4]
          }, {
            date: '04/16/17',
            time: 'E',
            winningNumber: [5, 9, 4]
          }, {
            date: '03/22/17',
            time: 'E',
            winningNumber: [6, 7, 2]
          }, {
            date: '02/25/17',
            time: 'E',
            winningNumber: [9, 8, 2]
          }, {
            date: '05/11/17',
            time: 'M',
            winningNumber: [7, 2, 0]
          }, {
            date: '04/16/17',
            time: 'M',
            winningNumber: [7, 6, 4]
          }, {
            date: '03/22/17',
            time: 'M',
            winningNumber: [2, 6, 6]
          }, {
            date: '02/25/17',
            time: 'M',
            winningNumber: [7, 3, 7]
          }, {
            date: '05/10/17',
            time: 'E',
            winningNumber: [7, 2, 2]
          }, {
            date: '04/15/17',
            time: 'E',
            winningNumber: [7, 5, 1]
          }, {
            date: '03/21/17',
            time: 'E',
            winningNumber: [4, 3, 5]
          }, {
            date: '02/24/17',
            time: 'E',
            winningNumber: [3, 5, 6]
          }, {
            date: '05/10/17',
            time: 'M',
            winningNumber: [8, 4, 4]
          }, {
            date: '04/15/17',
            time: 'M',
            winningNumber: [6, 0, 5]
          }, {
            date: '03/21/17',
            time: 'M',
            winningNumber: [7, 9, 7]
          }, {
            date: '02/24/17',
            time: 'M',
            winningNumber: [6, 4, 2]
          }, {
            date: '02/23/17',
            time: 'E',
            winningNumber: [7, 0, 4]
          }, {
            date: '01/29/17',
            time: 'E',
            winningNumber: [5, 4, 3]
          }, {
            date: '01/04/17',
            time: 'E',
            winningNumber: [6, 6, 9]
          }, {
            date: '12/10/16',
            time: 'E',
            winningNumber: [8, 4, 2]
          }, {
            date: '02/23/17',
            time: 'M',
            winningNumber: [5, 9, 8]
          }, {
            date: '01/29/17',
            time: 'M',
            winningNumber: [0, 5, 9]
          }, {
            date: '01/04/17',
            time: 'M',
            winningNumber: [4, 9, 9]
          }, {
            date: '12/10/16',
            time: 'M',
            winningNumber: [0, 3, 5]
          }, {
            date: '02/22/17',
            time: 'E',
            winningNumber: [5, 5, 6]
          }, {
            date: '01/28/17',
            time: 'E',
            winningNumber: [8, 2, 3]
          }, {
            date: '01/03/17',
            time: 'E',
            winningNumber: [8, 5, 0]
          }, {
            date: '12/09/16',
            time: 'E',
            winningNumber: [0, 4, 2]
          }, {
            date: '02/22/17',
            time: 'M',
            winningNumber: [2, 1, 4]
          }, {
            date: '01/28/17',
            time: 'M',
            winningNumber: [8, 1, 0]
          }, {
            date: '01/03/17',
            time: 'M',
            winningNumber: [4, 7, 6]
          }, {
            date: '12/09/16',
            time: 'M',
            winningNumber: [4, 3, 0]
          }, {
            date: '02/21/17',
            time: 'E',
            winningNumber: [4, 4, 4]
          }, {
            date: '01/27/17',
            time: 'E',
            winningNumber: [1, 7, 2]
          }, {
            date: '01/02/17',
            time: 'E',
            winningNumber: [8, 0, 8]
          }, {
            date: '12/08/16',
            time: 'E',
            winningNumber: [7, 2, 4]
          }, {
            date: '02/21/17',
            time: 'M',
            winningNumber: [5, 5, 3]
          }, {
            date: '01/27/17',
            time: 'M',
            winningNumber: [7, 8, 8]
          }, {
            date: '01/02/17',
            time: 'M',
            winningNumber: [9, 5, 6]
          }, {
            date: '12/08/16',
            time: 'M',
            winningNumber: [8, 5, 1]
          }, {
            date: '02/20/17',
            time: 'E',
            winningNumber: [4, 1, 0]
          }, {
            date: '01/26/17',
            time: 'E',
            winningNumber: [4, 7, 8]
          }, {
            date: '01/01/17',
            time: 'E',
            winningNumber: [6, 7, 8]
          }, {
            date: '12/07/16',
            time: 'E',
            winningNumber: [4, 3, 4]
          }, {
            date: '02/20/17',
            time: 'M',
            winningNumber: [3, 4, 4]
          }, {
            date: '01/26/17',
            time: 'M',
            winningNumber: [4, 2, 2]
          }, {
            date: '01/01/17',
            time: 'M',
            winningNumber: [3, 9, 3]
          }, {
            date: '12/07/16',
            time: 'M',
            winningNumber: [0, 7, 2]
          }, {
            date: '02/19/17',
            time: 'E',
            winningNumber: [9, 2, 8]
          }, {
            date: '01/25/17',
            time: 'E',
            winningNumber: [6, 8, 7]
          }, {
            date: '12/31/16',
            time: 'E',
            winningNumber: [7, 3, 0]
          }, {
            date: '12/06/16',
            time: 'E',
            winningNumber: [5, 0, 1]
          }, {
            date: '02/19/17',
            time: 'M',
            winningNumber: [2, 3, 7]
          }, {
            date: '01/25/17',
            time: 'M',
            winningNumber: [1, 7, 4]
          }, {
            date: '12/31/16',
            time: 'M',
            winningNumber: [3, 3, 3]
          }, {
            date: '12/06/16',
            time: 'M',
            winningNumber: [6, 3, 4]
          }, {
            date: '02/18/17',
            time: 'E',
            winningNumber: [9, 8, 9]
          }, {
            date: '01/24/17',
            time: 'E',
            winningNumber: [8, 9, 0]
          }, {
            date: '12/30/16',
            time: 'E',
            winningNumber: [5, 3, 7]
          }, {
            date: '12/05/16',
            time: 'E',
            winningNumber: [0, 4, 9]
          }, {
            date: '02/18/17',
            time: 'M',
            winningNumber: [4, 8, 1]
          }, {
            date: '01/24/17',
            time: 'M',
            winningNumber: [9, 2, 4]
          }, {
            date: '12/30/16',
            time: 'M',
            winningNumber: [7, 8, 5]
          }, {
            date: '12/05/16',
            time: 'M',
            winningNumber: [6, 3, 1]
          }, {
            date: '02/17/17',
            time: 'E',
            winningNumber: [5, 1, 9]
          }, {
            date: '01/23/17',
            time: 'E',
            winningNumber: [3, 2, 3]
          }, {
            date: '12/29/16',
            time: 'E',
            winningNumber: [5, 5, 8]
          }, {
            date: '12/04/16',
            time: 'E',
            winningNumber: [3, 0, 0]
          }, {
            date: '02/17/17',
            time: 'M',
            winningNumber: [7, 2, 5]
          }, {
            date: '01/23/17',
            time: 'M',
            winningNumber: [2, 4, 3]
          }, {
            date: '12/29/16',
            time: 'M',
            winningNumber: [4, 1, 5]
          }, {
            date: '12/04/16',
            time: 'M',
            winningNumber: [6, 2, 5]
          }, {
            date: '02/16/17',
            time: 'E',
            winningNumber: [3, 7, 8]
          }, {
            date: '01/22/17',
            time: 'E',
            winningNumber: [7, 1, 1]
          }, {
            date: '12/28/16',
            time: 'E',
            winningNumber: [9, 7, 3]
          }, {
            date: '12/03/16',
            time: 'E',
            winningNumber: [3, 1, 6]
          }, {
            date: '02/16/17',
            time: 'M',
            winningNumber: [4, 4, 7]
          }, {
            date: '01/22/17',
            time: 'M',
            winningNumber: [0, 1, 4]
          }, {
            date: '12/28/16',
            time: 'M',
            winningNumber: [5, 0, 7]
          }, {
            date: '12/03/16',
            time: 'M',
            winningNumber: [2, 5, 8]
          }, {
            date: '02/15/17',
            time: 'E',
            winningNumber: [4, 3, 9]
          }, {
            date: '01/21/17',
            time: 'E',
            winningNumber: [9, 8, 0]
          }, {
            date: '12/27/16',
            time: 'E',
            winningNumber: [5, 9, 6]
          }, {
            date: '12/02/16',
            time: 'E',
            winningNumber: [0, 6, 2]
          }, {
            date: '02/15/17',
            time: 'M',
            winningNumber: [9, 8, 0]
          }, {
            date: '01/21/17',
            time: 'M',
            winningNumber: [3, 4, 0]
          }, {
            date: '12/27/16',
            time: 'M',
            winningNumber: [7, 4, 2]
          }, {
            date: '12/02/16',
            time: 'M',
            winningNumber: [5, 5, 6]
          }, {
            date: '02/14/17',
            time: 'E',
            winningNumber: [5, 2, 3]
          }, {
            date: '01/20/17',
            time: 'E',
            winningNumber: [5, 7, 4]
          }, {
            date: '12/26/16',
            time: 'E',
            winningNumber: [4, 3, 1]
          }, {
            date: '12/01/16',
            time: 'E',
            winningNumber: [6, 7, 9]
          }, {
            date: '02/14/17',
            time: 'M',
            winningNumber: [9, 5, 7]
          }, {
            date: '01/20/17',
            time: 'M',
            winningNumber: [5, 6, 7]
          }, {
            date: '12/26/16',
            time: 'M',
            winningNumber: [5, 1, 9]
          }, {
            date: '12/01/16',
            time: 'M',
            winningNumber: [8, 0, 5]
          }, {
            date: '02/13/17',
            time: 'E',
            winningNumber: [0, 0, 7]
          }, {
            date: '01/19/17',
            time: 'E',
            winningNumber: [7, 1, 2]
          }, {
            date: '12/25/16',
            time: 'E',
            winningNumber: [7, 4, 0]
          }, {
            date: '11/30/16',
            time: 'E',
            winningNumber: [2, 2, 8]
          }, {
            date: '02/13/17',
            time: 'M',
            winningNumber: [2, 4, 8]
          }, {
            date: '01/19/17',
            time: 'M',
            winningNumber: [5, 6, 1]
          }, {
            date: '12/25/16',
            time: 'M',
            winningNumber: [4, 1, 5]
          }, {
            date: '11/30/16',
            time: 'M',
            winningNumber: [2, 2, 4]
          }, {
            date: '02/12/17',
            time: 'E',
            winningNumber: [5, 1, 6]
          }, {
            date: '01/18/17',
            time: 'E',
            winningNumber: [3, 3, 5]
          }, {
            date: '12/24/16',
            time: 'E',
            winningNumber: [6, 7, 0]
          }, {
            date: '11/29/16',
            time: 'E',
            winningNumber: [9, 5, 8]
          }, {
            date: '02/12/17',
            time: 'M',
            winningNumber: [4, 8, 1]
          }, {
            date: '01/18/17',
            time: 'M',
            winningNumber: [4, 5, 1]
          }, {
            date: '12/24/16',
            time: 'M',
            winningNumber: [6, 6, 4]
          }, {
            date: '11/29/16',
            time: 'M',
            winningNumber: [3, 3, 3]
          }, {
            date: '02/11/17',
            time: 'E',
            winningNumber: [2, 4, 8]
          }, {
            date: '01/17/17',
            time: 'E',
            winningNumber: [1, 5, 2]
          }, {
            date: '12/23/16',
            time: 'E',
            winningNumber: [2, 4, 1]
          }, {
            date: '11/28/16',
            time: 'E',
            winningNumber: [4, 0, 8]
          }, {
            date: '02/11/17',
            time: 'M',
            winningNumber: [5, 0, 1]
          }, {
            date: '01/17/17',
            time: 'M',
            winningNumber: [1, 7, 3]
          }, {
            date: '12/23/16',
            time: 'M',
            winningNumber: [2, 5, 6]
          }, {
            date: '11/28/16',
            time: 'M',
            winningNumber: [8, 0, 6]
          }, {
            date: '02/10/17',
            time: 'E',
            winningNumber: [1, 1, 9]
          }, {
            date: '01/16/17',
            time: 'E',
            winningNumber: [9, 7, 5]
          }, {
            date: '12/22/16',
            time: 'E',
            winningNumber: [2, 3, 0]
          }, {
            date: '11/27/16',
            time: 'E',
            winningNumber: [2, 5, 5]
          }, {
            date: '02/10/17',
            time: 'M',
            winningNumber: [7, 2, 7]
          }, {
            date: '01/16/17',
            time: 'M',
            winningNumber: [7, 6, 8]
          }, {
            date: '12/22/16',
            time: 'M',
            winningNumber: [7, 9, 6]
          }, {
            date: '11/27/16',
            time: 'M',
            winningNumber: [9, 1, 5]
          }, {
            date: '02/09/17',
            time: 'E',
            winningNumber: [0, 8, 2]
          }, {
            date: '01/15/17',
            time: 'E',
            winningNumber: [8, 3, 4]
          }, {
            date: '12/21/16',
            time: 'E',
            winningNumber: [4, 7, 1]
          }, {
            date: '11/26/16',
            time: 'E',
            winningNumber: [2, 4, 0]
          }, {
            date: '02/09/17',
            time: 'M',
            winningNumber: [7, 3, 3]
          }, {
            date: '01/15/17',
            time: 'M',
            winningNumber: [2, 8, 5]
          }, {
            date: '12/21/16',
            time: 'M',
            winningNumber: [4, 1, 4]
          }, {
            date: '11/26/16',
            time: 'M',
            winningNumber: [3, 9, 0]
          }, {
            date: '02/08/17',
            time: 'E',
            winningNumber: [6, 0, 1]
          }, {
            date: '01/14/17',
            time: 'E',
            winningNumber: [3, 5, 2]
          }, {
            date: '12/20/16',
            time: 'E',
            winningNumber: [3, 3, 7]
          }, {
            date: '11/25/16',
            time: 'E',
            winningNumber: [8, 3, 4]
          }, {
            date: '02/08/17',
            time: 'M',
            winningNumber: [8, 3, 3]
          }, {
            date: '01/14/17',
            time: 'M',
            winningNumber: [2, 4, 5]
          }, {
            date: '12/20/16',
            time: 'M',
            winningNumber: [7, 3, 3]
          }, {
            date: '11/25/16',
            time: 'M',
            winningNumber: [5, 3, 9]
          }, {
            date: '02/07/17',
            time: 'E',
            winningNumber: [5, 4, 9]
          }, {
            date: '01/13/17',
            time: 'E',
            winningNumber: [9, 2, 5]
          }, {
            date: '12/19/16',
            time: 'E',
            winningNumber: [2, 6, 8]
          }, {
            date: '11/24/16',
            time: 'E',
            winningNumber: [3, 2, 3]
          }, {
            date: '02/07/17',
            time: 'M',
            winningNumber: [9, 2, 9]
          }, {
            date: '01/13/17',
            time: 'M',
            winningNumber: [6, 4, 2]
          }, {
            date: '12/19/16',
            time: 'M',
            winningNumber: [1, 0, 7]
          }, {
            date: '11/24/16',
            time: 'M',
            winningNumber: [8, 9, 5]
          }, {
            date: '02/06/17',
            time: 'E',
            winningNumber: [5, 1, 8]
          }, {
            date: '01/12/17',
            time: 'E',
            winningNumber: [1, 9, 9]
          }, {
            date: '12/18/16',
            time: 'E',
            winningNumber: [3, 1, 3]
          }, {
            date: '11/23/16',
            time: 'E',
            winningNumber: [8, 5, 2]
          }, {
            date: '02/06/17',
            time: 'M',
            winningNumber: [8, 1, 1]
          }, {
            date: '01/12/17',
            time: 'M',
            winningNumber: [8, 7, 4]
          }, {
            date: '12/18/16',
            time: 'M',
            winningNumber: [8, 2, 1]
          }, {
            date: '11/23/16',
            time: 'M',
            winningNumber: [8, 1, 5]
          }, {
            date: '02/05/17',
            time: 'E',
            winningNumber: [6, 1, 3]
          }, {
            date: '01/11/17',
            time: 'E',
            winningNumber: [9, 6, 7]
          }, {
            date: '12/17/16',
            time: 'E',
            winningNumber: [8, 3, 9]
          }, {
            date: '11/22/16',
            time: 'E',
            winningNumber: [1, 4, 8]
          }, {
            date: '02/05/17',
            time: 'M',
            winningNumber: [0, 2, 0]
          }, {
            date: '01/11/17',
            time: 'M',
            winningNumber: [9, 2, 7]
          }, {
            date: '12/17/16',
            time: 'M',
            winningNumber: [8, 7, 0]
          }, {
            date: '11/22/16',
            time: 'M',
            winningNumber: [5, 3, 9]
          }, {
            date: '02/04/17',
            time: 'E',
            winningNumber: [0, 7, 1]
          }, {
            date: '01/10/17',
            time: 'E',
            winningNumber: [5, 2, 6]
          }, {
            date: '12/16/16',
            time: 'E',
            winningNumber: [3, 2, 8]
          }, {
            date: '11/21/16',
            time: 'E',
            winningNumber: [0, 0, 9]
          }, {
            date: '02/04/17',
            time: 'M',
            winningNumber: [4, 3, 0]
          }, {
            date: '01/10/17',
            time: 'M',
            winningNumber: [1, 0, 5]
          }, {
            date: '12/16/16',
            time: 'M',
            winningNumber: [4, 7, 1]
          }, {
            date: '11/21/16',
            time: 'M',
            winningNumber: [6, 0, 0]
          }, {
            date: '02/03/17',
            time: 'E',
            winningNumber: [4, 0, 1]
          }, {
            date: '01/09/17',
            time: 'E',
            winningNumber: [2, 4, 2]
          }, {
            date: '12/15/16',
            time: 'E',
            winningNumber: [8, 7, 1]
          }, {
            date: '11/20/16',
            time: 'E',
            winningNumber: [6, 4, 3]
          }, {
            date: '02/03/17',
            time: 'M',
            winningNumber: [3, 7, 7]
          }, {
            date: '01/09/17',
            time: 'M',
            winningNumber: [6, 0, 1]
          }, {
            date: '12/15/16',
            time: 'M',
            winningNumber: [7, 6, 1]
          }, {
            date: '11/20/16',
            time: 'M',
            winningNumber: [4, 8, 5]
          }, {
            date: '02/02/17',
            time: 'E',
            winningNumber: [1, 8, 3]
          }, {
            date: '01/08/17',
            time: 'E',
            winningNumber: [4, 8, 2]
          }, {
            date: '12/14/16',
            time: 'E',
            winningNumber: [2, 0, 1]
          }, {
            date: '11/19/16',
            time: 'E',
            winningNumber: [6, 8, 4]
          }, {
            date: '02/02/17',
            time: 'M',
            winningNumber: [2, 7, 2]
          }, {
            date: '01/08/17',
            time: 'M',
            winningNumber: [3, 0, 0]
          }, {
            date: '12/14/16',
            time: 'M',
            winningNumber: [9, 8, 9]
          }, {
            date: '11/19/16',
            time: 'M',
            winningNumber: [6, 6, 7]
          }, {
            date: '02/01/17',
            time: 'E',
            winningNumber: [7, 9, 8]
          }, {
            date: '01/07/17',
            time: 'E',
            winningNumber: [8, 1, 5]
          }, {
            date: '12/13/16',
            time: 'E',
            winningNumber: [0, 1, 0]
          }, {
            date: '11/18/16',
            time: 'E',
            winningNumber: [9, 0, 9]
          }, {
            date: '02/01/17',
            time: 'M',
            winningNumber: [7, 5, 7]
          }, {
            date: '01/07/17',
            time: 'M',
            winningNumber: [8, 0, 2]
          }, {
            date: '12/13/16',
            time: 'M',
            winningNumber: [8, 3, 4]
          }, {
            date: '11/18/16',
            time: 'M',
            winningNumber: [4, 1, 1]
          }, {
            date: '01/31/17',
            time: 'E',
            winningNumber: [8, 6, 7]
          }, {
            date: '01/06/17',
            time: 'E',
            winningNumber: [2, 8, 0]
          }, {
            date: '12/12/16',
            time: 'E',
            winningNumber: [4, 2, 0]
          }, {
            date: '11/17/16',
            time: 'E',
            winningNumber: [0, 2, 6]
          }, {
            date: '01/31/17',
            time: 'M',
            winningNumber: [0, 4, 4]
          }, {
            date: '01/06/17',
            time: 'M',
            winningNumber: [3, 9, 5]
          }, {
            date: '12/12/16',
            time: 'M',
            winningNumber: [4, 0, 8]
          }, {
            date: '11/17/16',
            time: 'M',
            winningNumber: [6, 5, 2]
          }, {
            date: '01/30/17',
            time: 'E',
            winningNumber: [0, 7, 4]
          }, {
            date: '01/05/17',
            time: 'E',
            winningNumber: [6, 8, 0]
          }, {
            date: '12/11/16',
            time: 'E',
            winningNumber: [6, 7, 2]
          }, {
            date: '11/16/16',
            time: 'E',
            winningNumber: [8, 2, 5]
          }, {
            date: '01/30/17',
            time: 'M',
            winningNumber: [8, 8, 6]
          }, {
            date: '01/05/17',
            time: 'M',
            winningNumber: [2, 5, 3]
          }, {
            date: '12/11/16',
            time: 'M',
            winningNumber: [9, 5, 9]
          }, {
            date: '11/16/16',
            time: 'M',
            winningNumber: [0, 4, 2]
          }
        ]
      }
      // , {
      //   name: 'Pick 4',
      //   lotteryLength: 4,
      //   maxNumber: 9,
      //   averageWinnings: 
      //     {
      //       straight: 2500,
      //       box: [
      //         {
      //           boxWay: '4 ways',
      //           winnings: 599
      //         }, {
      //           boxWay: '6 ways',
      //           winnings: 400
      //         }, {
      //           boxWay: '12 ways',
      //           winnings: 200
      //         }, {
      //           boxWay: '24 ways',
      //           winnings: 100
      //         }
      //       ]
      //     }
      //   ,
      //   winningHistory: [
      //     {
      //       date: '12/20/17',
      //       time: '	E',
      //       winningNumber: [7, 0, 9, 4]
      //     }, {
      //       date: '11/25/17',
      //       time: '	E',
      //       winningNumber: [0, 5, 8, 8]
      //     }, {
      //       date: '10/31/17',
      //       time: '	E',
      //       winningNumber: [3, 1, 9, 2]
      //     }, {
      //       date: '10/06/17',
      //       time: '	E',
      //       winningNumber: [0, 6, 8, 9]
      //     }, {
      //       date: '12/20/17',
      //       time: '	M',
      //       winningNumber: [2, 9, 3, 8]
      //     }, {
      //       date: '11/25/17',
      //       time: '	M',
      //       winningNumber: [1, 2, 8, 8]
      //     }, {
      //       date: '10/31/17',
      //       time: '	M',
      //       winningNumber: [3, 6, 7, 5]
      //     }, {
      //       date: '10/06/17',
      //       time: '	M',
      //       winningNumber: [2, 2, 7, 2]
      //     }, {
      //       date: '12/19/17',
      //       time: '	E',
      //       winningNumber: [5, 2, 6, 2]
      //     }, {
      //       date: '11/24/17',
      //       time: '	E',
      //       winningNumber: [3, 3, 0, 0]
      //     }, {
      //       date: '10/30/17',
      //       time: '	E',
      //       winningNumber: [7, 7, 1, 9]
      //     }, {
      //       date: '10/05/17',
      //       time: '	E',
      //       winningNumber: [5, 5, 6, 9]
      //     }, {
      //       date: '12/19/17',
      //       time: '	M',
      //       winningNumber: [0, 3, 2, 5]
      //     }, {
      //       date: '11/24/17',
      //       time: '	M',
      //       winningNumber: [3, 9, 8, 3]
      //     }, {
      //       date: '10/30/17',
      //       time: '	M',
      //       winningNumber: [6, 5, 6, 9]
      //     }, {
      //       date: '10/05/17',
      //       time: '	M',
      //       winningNumber: [9, 9, 4, 7]
      //     }, {
      //       date: '12/18/17',
      //       time: '	E',
      //       winningNumber: [0, 0, 7, 4]
      //     }, {
      //       date: '11/23/17',
      //       time: '	E',
      //       winningNumber: [1, 6, 2, 4]
      //     }, {
      //       date: '10/29/17',
      //       time: '	E',
      //       winningNumber: [5, 0, 5, 2]
      //     }, {
      //       date: '10/04/17',
      //       time: '	E',
      //       winningNumber: [0, 0, 8, 1]
      //     }, {
      //       date: '12/18/17',
      //       time: '	M',
      //       winningNumber: [8, 8, 5, 0]
      //     }, {
      //       date: '11/23/17',
      //       time: '	M',
      //       winningNumber: [2, 0, 3, 9]
      //     }, {
      //       date: '10/29/17',
      //       time: '	M',
      //       winningNumber: [2, 9, 6, 0]
      //     }, {
      //       date: '10/04/17',
      //       time: '	M',
      //       winningNumber: [7, 7, 2, 4]
      //     }, {
      //       date: '12/17/17',
      //       time: '	E',
      //       winningNumber: [6, 3, 1, 0]
      //     }, {
      //       date: '11/22/17',
      //       time: '	E',
      //       winningNumber: [9, 1, 5, 6]
      //     }, {
      //       date: '10/28/17',
      //       time: '	E',
      //       winningNumber: [7, 8, 2, 0]
      //     }, {
      //       date: '10/03/17',
      //       time: '	E',
      //       winningNumber: [9, 8, 9, 0]
      //     }, {
      //       date: '12/17/17',
      //       time: '	M',
      //       winningNumber: [6, 5, 2, 7]
      //     }, {
      //       date: '11/22/17',
      //       time: '	M',
      //       winningNumber: [3, 6, 8, 8]
      //     }, {
      //       date: '10/28/17',
      //       time: '	M',
      //       winningNumber: [2, 2, 7, 8]
      //     }, {
      //       date: '10/03/17',
      //       time: '	M',
      //       winningNumber: [7, 6, 9, 6]
      //     }, {
      //       date: '12/16/17',
      //       time: '	E',
      //       winningNumber: [9, 7, 5, 4]
      //     }, {
      //       date: '11/21/17',
      //       time: '	E',
      //       winningNumber: [7, 3, 0, 0]
      //     }, {
      //       date: '10/27/17',
      //       time: '	E',
      //       winningNumber: [8, 6, 8, 6]
      //     }, {
      //       date: '10/02/17',
      //       time: '	E',
      //       winningNumber: [0, 8, 0, 1]
      //     }, {
      //       date: '12/16/17',
      //       time: '	M',
      //       winningNumber: [3, 6, 5, 0]
      //     }, {
      //       date: '11/21/17',
      //       time: '	M',
      //       winningNumber: [0, 6, 6, 3]
      //     }, {
      //       date: '10/27/17',
      //       time: '	M',
      //       winningNumber: [3, 1, 8, 4]
      //     }, {
      //       date: '10/02/17',
      //       time: '	M',
      //       winningNumber: [5, 9, 1, 5]
      //     }, {
      //       date: '12/15/17',
      //       time: '	E',
      //       winningNumber: [1, 4, 9, 2]
      //     }, {
      //       date: '11/20/17',
      //       time: '	E',
      //       winningNumber: [0, 6, 7, 8]
      //     }, {
      //       date: '10/26/17',
      //       time: '	E',
      //       winningNumber: [9, 8, 6, 2]
      //     }, {
      //       date: '10/01/17',
      //       time: '	E',
      //       winningNumber: [2, 9, 8, 8]
      //     }, {
      //       date: '12/15/17',
      //       time: '	M',
      //       winningNumber: [0, 0, 0, 0]
      //     }, {
      //       date: '11/20/17',
      //       time: '	M',
      //       winningNumber: [8, 5, 4, 3]
      //     }, {
      //       date: '10/26/17',
      //       time: '	M',
      //       winningNumber: [9, 9, 9, 0]
      //     }, {
      //       date: '10/01/17',
      //       time: '	M',
      //       winningNumber: [9, 9, 0, 3]
      //     }, {
      //       date: '12/14/17',
      //       time: '	E',
      //       winningNumber: [1, 3, 8, 2]
      //     }, {
      //       date: '11/19/17',
      //       time: '	E',
      //       winningNumber: [7, 8, 9, 6]
      //     }, {
      //       date: '10/25/17',
      //       time: '	E',
      //       winningNumber: [4, 4, 3, 1]
      //     }, {
      //       date: '09/30/17',
      //       time: '	E',
      //       winningNumber: [0, 7, 7, 5]
      //     }, {
      //       date: '12/14/17',
      //       time: '	M',
      //       winningNumber: [8, 3, 9, 9]
      //     }, {
      //       date: '11/19/17',
      //       time: '	M',
      //       winningNumber: [0, 1, 5, 3]
      //     }, {
      //       date: '10/25/17',
      //       time: '	M',
      //       winningNumber: [3, 1, 9, 8]
      //     }, {
      //       date: '09/30/17',
      //       time: '	M',
      //       winningNumber: [5, 3, 6, 6]
      //     }, {
      //       date: '12/13/17',
      //       time: '	E',
      //       winningNumber: [2, 6, 8, 1]
      //     }, {
      //       date: '11/18/17',
      //       time: '	E',
      //       winningNumber: [3, 3, 4, 0]
      //     }, {
      //       date: '10/24/17',
      //       time: '	E',
      //       winningNumber: [2, 5, 6, 1]
      //     }, {
      //       date: '09/29/17',
      //       time: '	E',
      //       winningNumber: [0, 0, 9, 3]
      //     }, {
      //       date: '12/13/17',
      //       time: '	M',
      //       winningNumber: [7, 0, 3, 6]
      //     }, {
      //       date: '11/18/17',
      //       time: '	M',
      //       winningNumber: [2, 1, 2, 9]
      //     }, {
      //       date: '10/24/17',
      //       time: '	M',
      //       winningNumber: [7, 2, 1, 2]
      //     }, {
      //       date: '09/29/17',
      //       time: '	M',
      //       winningNumber: [9, 5, 5, 6]
      //     }, {
      //       date: '12/12/17',
      //       time: '	E',
      //       winningNumber: [2, 5, 5, 8]
      //     }, {
      //       date: '11/17/17',
      //       time: '	E',
      //       winningNumber: [1, 6, 1, 9]
      //     }, {
      //       date: '10/23/17',
      //       time: '	E',
      //       winningNumber: [7, 6, 7, 1]
      //     }, {
      //       date: '09/28/17',
      //       time: '	E',
      //       winningNumber: [8, 4, 1, 5]
      //     }, {
      //       date: '12/12/17',
      //       time: '	M',
      //       winningNumber: [4, 9, 8, 4]
      //     }, {
      //       date: '11/17/17',
      //       time: '	M',
      //       winningNumber: [9, 3, 5, 9]
      //     }, {
      //       date: '10/23/17',
      //       time: '	M',
      //       winningNumber: [9, 9, 2, 0]
      //     }, {
      //       date: '09/28/17',
      //       time: '	M',
      //       winningNumber: [4, 5, 6, 3]
      //     }, {
      //       date: '12/11/17',
      //       time: '	E',
      //       winningNumber: [7, 1, 8, 1]
      //     }, {
      //       date: '11/16/17',
      //       time: '	E',
      //       winningNumber: [1, 5, 6, 7]
      //     }, {
      //       date: '10/22/17',
      //       time: '	E',
      //       winningNumber: [7, 9, 6, 3]
      //     }, {
      //       date: '09/27/17',
      //       time: '	E',
      //       winningNumber: [0, 3, 4, 0]
      //     }, {
      //       date: '12/11/17',
      //       time: '	M',
      //       winningNumber: [1, 2, 6, 6]
      //     }, {
      //       date: '11/16/17',
      //       time: '	M',
      //       winningNumber: [8, 4, 0, 9]
      //     }, {
      //       date: '10/22/17',
      //       time: '	M',
      //       winningNumber: [5, 6, 8, 4]
      //     }, {
      //       date: '09/27/17',
      //       time: '	M',
      //       winningNumber: [5, 6, 1, 5]
      //     }, {
      //       date: '12/10/17',
      //       time: '	E',
      //       winningNumber: [3, 3, 4, 8]
      //     }, {
      //       date: '11/15/17',
      //       time: '	E',
      //       winningNumber: [2, 2, 9, 5]
      //     }, {
      //       date: '10/21/17',
      //       time: '	E',
      //       winningNumber: [7, 4, 6, 5]
      //     }, {
      //       date: '09/26/17',
      //       time: '	E',
      //       winningNumber: [7, 3, 1, 3]
      //     }, {
      //       date: '12/10/17',
      //       time: '	M',
      //       winningNumber: [6, 7, 4, 2]
      //     }, {
      //       date: '11/15/17',
      //       time: '	M',
      //       winningNumber: [7, 2, 8, 6]
      //     }, {
      //       date: '10/21/17',
      //       time: '	M',
      //       winningNumber: [9, 8, 0, 4]
      //     }, {
      //       date: '09/26/17',
      //       time: '	M',
      //       winningNumber: [5, 0, 0, 3]
      //     }, {
      //       date: '12/09/17',
      //       time: '	E',
      //       winningNumber: [3, 5, 1, 6]
      //     }, {
      //       date: '11/14/17',
      //       time: '	E',
      //       winningNumber: [6, 8, 5, 0]
      //     }, {
      //       date: '10/20/17',
      //       time: '	E',
      //       winningNumber: [2, 6, 8, 7]
      //     }, {
      //       date: '09/25/17',
      //       time: '	E',
      //       winningNumber: [8, 1, 7, 2]
      //     }, {
      //       date: '12/09/17',
      //       time: '	M',
      //       winningNumber: [1, 0, 3, 8]
      //     }, {
      //       date: '11/14/17',
      //       time: '	M',
      //       winningNumber: [6, 9, 8, 5]
      //     }, {
      //       date: '10/20/17',
      //       time: '	M',
      //       winningNumber: [2, 3, 6, 8]
      //     }, {
      //       date: '09/25/17',
      //       time: '	M',
      //       winningNumber: [0, 6, 9, 2]
      //     }, {
      //       date: '12/08/17',
      //       time: '	E',
      //       winningNumber: [8, 6, 1, 7]
      //     }, {
      //       date: '11/13/17',
      //       time: '	E',
      //       winningNumber: [7, 5, 2, 2]
      //     }, {
      //       date: '10/19/17',
      //       time: '	E',
      //       winningNumber: [1, 8, 6, 9]
      //     }, {
      //       date: '09/24/17',
      //       time: '	E',
      //       winningNumber: [6, 9, 9, 2]
      //     }, {
      //       date: '12/08/17',
      //       time: '	M',
      //       winningNumber: [6, 1, 6, 8]
      //     }, {
      //       date: '11/13/17',
      //       time: '	M',
      //       winningNumber: [2, 7, 3, 5]
      //     }, {
      //       date: '10/19/17',
      //       time: '	M',
      //       winningNumber: [0, 7, 0, 1]
      //     }, {
      //       date: '09/24/17',
      //       time: '	M',
      //       winningNumber: [8, 9, 1, 6]
      //     }, {
      //       date: '12/07/17',
      //       time: '	E',
      //       winningNumber: [3, 4, 4, 1]
      //     }, {
      //       date: '11/12/17',
      //       time: '	E',
      //       winningNumber: [1, 6, 4, 8]
      //     }, {
      //       date: '10/18/17',
      //       time: '	E',
      //       winningNumber: [5, 2, 8, 0]
      //     }, {
      //       date: '09/23/17',
      //       time: '	E',
      //       winningNumber: [2, 6, 2, 1]
      //     }, {
      //       date: '12/07/17',
      //       time: '	M',
      //       winningNumber: [3, 1, 3, 1]
      //     }, {
      //       date: '11/12/17',
      //       time: '	M',
      //       winningNumber: [3, 3, 5, 1]
      //     }, {
      //       date: '10/18/17',
      //       time: '	M',
      //       winningNumber: [8, 3, 4, 9]
      //     }, {
      //       date: '09/23/17',
      //       time: '	M',
      //       winningNumber: [0, 3, 7, 6]
      //     }, {
      //       date: '12/06/17',
      //       time: '	E',
      //       winningNumber: [4, 5, 9, 5]
      //     }, {
      //       date: '11/11/17',
      //       time: '	E',
      //       winningNumber: [9, 8, 2, 1]
      //     }, {
      //       date: '10/17/17',
      //       time: '	E',
      //       winningNumber: [0, 7, 0, 3]
      //     }, {
      //       date: '09/22/17',
      //       time: '	E',
      //       winningNumber: [4, 5, 6, 6]
      //     }, {
      //       date: '12/06/17',
      //       time: '	M',
      //       winningNumber: [3, 1, 2, 6]
      //     }, {
      //       date: '11/11/17',
      //       time: '	M',
      //       winningNumber: [7, 0, 3, 2]
      //     }, {
      //       date: '10/17/17',
      //       time: '	M',
      //       winningNumber: [5, 4, 1, 9]
      //     }, {
      //       date: '09/22/17',
      //       time: '	M',
      //       winningNumber: [6, 7, 4, 1]
      //     }, {
      //       date: '12/05/17',
      //       time: '	E',
      //       winningNumber: [0, 2, 6, 1]
      //     }, {
      //       date: '11/10/17',
      //       time: '	E',
      //       winningNumber: [2, 9, 7, 9]
      //     }, {
      //       date: '10/16/17',
      //       time: '	E',
      //       winningNumber: [0, 8, 1, 0]
      //     }, {
      //       date: '09/21/17',
      //       time: '	E',
      //       winningNumber: [2, 4, 3, 0]
      //     }, {
      //       date: '12/05/17',
      //       time: '	M',
      //       winningNumber: [5, 6, 5, 6]
      //     }, {
      //       date: '11/10/17',
      //       time: '	M',
      //       winningNumber: [2, 7, 7, 2]
      //     }, {
      //       date: '10/16/17',
      //       time: '	M',
      //       winningNumber: [7, 9, 2, 8]
      //     }, {
      //       date: '09/21/17',
      //       time: '	M',
      //       winningNumber: [4, 7, 5, 4]
      //     }, {
      //       date: '12/04/17',
      //       time: '	E',
      //       winningNumber: [0, 8, 8, 5]
      //     }, {
      //       date: '11/09/17',
      //       time: '	E',
      //       winningNumber: [8, 4, 1, 5]
      //     }, {
      //       date: '10/15/17',
      //       time: '	E',
      //       winningNumber: [8, 5, 8, 4]
      //     }, {
      //       date: '09/20/17',
      //       time: '	E',
      //       winningNumber: [9, 7, 5, 4]
      //     }, {
      //       date: '12/04/17',
      //       time: '	M',
      //       winningNumber: [9, 8, 7, 8]
      //     }, {
      //       date: '11/09/17',
      //       time: '	M',
      //       winningNumber: [2, 1, 7, 9]
      //     }, {
      //       date: '10/15/17',
      //       time: '	M',
      //       winningNumber: [0, 4, 9, 0]
      //     }, {
      //       date: '09/20/17',
      //       time: '	M',
      //       winningNumber: [6, 4, 4, 5]
      //     }, {
      //       date: '12/03/17',
      //       time: '	E',
      //       winningNumber: [8, 9, 3, 7]
      //     }, {
      //       date: '11/08/17',
      //       time: '	E',
      //       winningNumber: [2, 0, 6, 8]
      //     }, {
      //       date: '10/14/17',
      //       time: '	E',
      //       winningNumber: [0, 6, 7, 4]
      //     }, {
      //       date: '09/19/17',
      //       time: '	E',
      //       winningNumber: [2, 7, 7, 4]
      //     }, {
      //       date: '12/03/17',
      //       time: '	M',
      //       winningNumber: [9, 5, 1, 2]
      //     }, {
      //       date: '11/08/17',
      //       time: '	M',
      //       winningNumber: [0, 9, 4, 4]
      //     }, {
      //       date: '10/14/17',
      //       time: '	M',
      //       winningNumber: [3, 6, 0, 4]
      //     }, {
      //       date: '09/19/17',
      //       time: '	M',
      //       winningNumber: [9, 9, 4, 0]
      //     }, {
      //       date: '12/02/17',
      //       time: '	E',
      //       winningNumber: [9, 8, 8, 7]
      //     }, {
      //       date: '11/07/17',
      //       time: '	E',
      //       winningNumber: [2, 4, 6, 4]
      //     }, {
      //       date: '10/13/17',
      //       time: '	E',
      //       winningNumber: [4, 2, 5, 8]
      //     }, {
      //       date: '09/18/17',
      //       time: '	E',
      //       winningNumber: [8, 7, 1, 6]
      //     }, {
      //       date: '12/02/17',
      //       time: '	M',
      //       winningNumber: [6, 8, 9, 8]
      //     }, {
      //       date: '11/07/17',
      //       time: '	M',
      //       winningNumber: [8, 0, 9, 0]
      //     }, {
      //       date: '10/13/17',
      //       time: '	M',
      //       winningNumber: [0, 0, 8, 2]
      //     }, {
      //       date: '09/18/17',
      //       time: '	M',
      //       winningNumber: [3, 3, 3, 4]
      //     }, {
      //       date: '12/01/17',
      //       time: '	E',
      //       winningNumber: [8, 2, 2, 2]
      //     }, {
      //       date: '11/06/17',
      //       time: '	E',
      //       winningNumber: [3, 6, 7, 2]
      //     }, {
      //       date: '10/12/17',
      //       time: '	E',
      //       winningNumber: [7, 7, 2, 0]
      //     }, {
      //       date: '09/17/17',
      //       time: '	E',
      //       winningNumber: [9, 1, 8, 1]
      //     }, {
      //       date: '12/01/17',
      //       time: '	M',
      //       winningNumber: [4, 8, 7, 9]
      //     }, {
      //       date: '11/06/17',
      //       time: '	M',
      //       winningNumber: [4, 5, 6, 8]
      //     }, {
      //       date: '10/12/17',
      //       time: '	M',
      //       winningNumber: [0, 3, 2, 1]
      //     }, {
      //       date: '09/17/17',
      //       time: '	M',
      //       winningNumber: [0, 5, 5, 1]
      //     }, {
      //       date: '11/30/17',
      //       time: '	E',
      //       winningNumber: [9, 8, 3, 1]
      //     }, {
      //       date: '11/05/17',
      //       time: '	E',
      //       winningNumber: [5, 1, 9, 0]
      //     }, {
      //       date: '10/11/17',
      //       time: '	E',
      //       winningNumber: [5, 5, 6, 7]
      //     }, {
      //       date: '09/16/17',
      //       time: '	E',
      //       winningNumber: [6, 7, 7, 0]
      //     }, {
      //       date: '11/30/17',
      //       time: '	M',
      //       winningNumber: [9, 2, 1, 2]
      //     }, {
      //       date: '11/05/17',
      //       time: '	M',
      //       winningNumber: [8, 7, 5, 6]
      //     }, {
      //       date: '10/11/17',
      //       time: '	M',
      //       winningNumber: [3, 2, 7, 0]
      //     }, {
      //       date: '09/16/17',
      //       time: '	M',
      //       winningNumber: [0, 9, 4, 6]
      //     }, {
      //       date: '11/29/17',
      //       time: '	E',
      //       winningNumber: [4, 2, 1, 5]
      //     }, {
      //       date: '11/04/17',
      //       time: '	E',
      //       winningNumber: [7, 8, 9, 3]
      //     }, {
      //       date: '10/10/17',
      //       time: '	E',
      //       winningNumber: [9, 5, 9, 1]
      //     }, {
      //       date: '09/15/17',
      //       time: '	E',
      //       winningNumber: [4, 7, 1, 2]
      //     }, {
      //       date: '11/29/17',
      //       time: '	M',
      //       winningNumber: [6, 0, 8, 5]
      //     }, {
      //       date: '11/04/17',
      //       time: '	M',
      //       winningNumber: [9, 6, 9, 5]
      //     }, {
      //       date: '10/10/17',
      //       time: '	M',
      //       winningNumber: [2, 9, 9, 8]
      //     }, {
      //       date: '09/15/17',
      //       time: '	M',
      //       winningNumber: [5, 2, 4, 8]
      //     }, {
      //       date: '11/28/17',
      //       time: '	E',
      //       winningNumber: [7, 3, 4, 8]
      //     }, {
      //       date: '11/03/17',
      //       time: '	E',
      //       winningNumber: [2, 7, 9, 0]
      //     }, {
      //       date: '10/09/17',
      //       time: '	E',
      //       winningNumber: [5, 3, 4, 0]
      //     }, {
      //       date: '09/14/17',
      //       time: '	E',
      //       winningNumber: [1, 1, 0, 7]
      //     }, {
      //       date: '11/28/17',
      //       time: '	M',
      //       winningNumber: [9, 5, 5, 7]
      //     }, {
      //       date: '11/03/17',
      //       time: '	M',
      //       winningNumber: [2, 7, 5, 2]
      //     }, {
      //       date: '10/09/17',
      //       time: '	M',
      //       winningNumber: [8, 7, 9, 2]
      //     }, {
      //       date: '09/14/17',
      //       time: '	M',
      //       winningNumber: [2, 9, 6, 5]
      //     }, {
      //       date: '11/27/17',
      //       time: '	E',
      //       winningNumber: [6, 4, 1, 5]
      //     }, {
      //       date: '11/02/17',
      //       time: '	E',
      //       winningNumber: [0, 2, 8, 5]
      //     }, {
      //       date: '10/08/17',
      //       time: '	E',
      //       winningNumber: [4, 6, 5, 8]
      //     }, {
      //       date: '09/13/17',
      //       time: '	E',
      //       winningNumber: [5, 3, 1, 4]
      //     }, {
      //       date: '11/27/17',
      //       time: '	M',
      //       winningNumber: [7, 1, 6, 1]
      //     }, {
      //       date: '11/02/17',
      //       time: '	M',
      //       winningNumber: [5, 7, 8, 9]
      //     }, {
      //       date: '10/08/17',
      //       time: '	M',
      //       winningNumber: [5, 0, 1, 9]
      //     }, {
      //       date: '09/13/17',
      //       time: '	M',
      //       winningNumber: [2, 8, 2, 9]
      //     }, {
      //       date: '11/26/17',
      //       time: '	E',
      //       winningNumber: [6, 7, 0, 7]
      //     }, {
      //       date: '11/01/17',
      //       time: '	E',
      //       winningNumber: [8, 9, 2, 2]
      //     }, {
      //       date: '10/07/17',
      //       time: '	E',
      //       winningNumber: [2, 6, 3, 3]
      //     }, {
      //       date: '09/12/17',
      //       time: '	E',
      //       winningNumber: [4, 3, 6, 6]
      //     }, {
      //       date: '11/26/17',
      //       time: '	M',
      //       winningNumber: [2, 1, 1, 5]
      //     }, {
      //       date: '11/01/17',
      //       time: '	M',
      //       winningNumber: [9, 7, 7, 0]
      //     }, {
      //       date: '10/07/17',
      //       time: '	M',
      //       winningNumber: [4, 0, 0, 3]
      //     }, {
      //       date: '09/12/17',
      //       time: '	M',
      //       winningNumber: [9, 1, 5, 4]
      //     }, {
      //       date: '09/11/17',
      //       time: '	E',
      //       winningNumber: [7, 1, 5, 9]
      //     }, {
      //       date: '08/17/17',
      //       time: '	E',
      //       winningNumber: [6, 0, 4, 8]
      //     }, {
      //       date: '07/23/17',
      //       time: '	E',
      //       winningNumber: [3, 2, 8, 2]
      //     }, {
      //       date: '06/28/17',
      //       time: '	E',
      //       winningNumber: [0, 0, 2, 2]
      //     }, {
      //       date: '09/11/17',
      //       time: '	M',
      //       winningNumber: [0, 4, 3, 4]
      //     }, {
      //       date: '08/17/17',
      //       time: '	M',
      //       winningNumber: [5, 9, 4, 7]
      //     }, {
      //       date: '07/23/17',
      //       time: '	M',
      //       winningNumber: [3, 6, 9, 2]
      //     }, {
      //       date: '06/28/17',
      //       time: '	M',
      //       winningNumber: [8, 3, 6, 8]
      //     }, {
      //       date: '09/10/17',
      //       time: '	E',
      //       winningNumber: [2, 1, 0, 3]
      //     }, {
      //       date: '08/16/17',
      //       time: '	E',
      //       winningNumber: [2, 2, 3, 4]
      //     }, {
      //       date: '07/22/17',
      //       time: '	E',
      //       winningNumber: [6, 4, 1, 0]
      //     }, {
      //       date: '06/27/17',
      //       time: '	E',
      //       winningNumber: [4, 6, 9, 9]
      //     }, {
      //       date: '09/10/17',
      //       time: '	M',
      //       winningNumber: [4, 4, 1, 0]
      //     }, {
      //       date: '08/16/17',
      //       time: '	M',
      //       winningNumber: [9, 7, 2, 9]
      //     }, {
      //       date: '07/22/17',
      //       time: '	M',
      //       winningNumber: [9, 2, 2, 0]
      //     }, {
      //       date: '06/27/17',
      //       time: '	M',
      //       winningNumber: [9, 1, 4, 3]
      //     }, {
      //       date: '09/09/17',
      //       time: '	E',
      //       winningNumber: [3, 3, 3, 9]
      //     }, {
      //       date: '08/15/17',
      //       time: '	E',
      //       winningNumber: [2, 7, 3, 6]
      //     }, {
      //       date: '07/21/17',
      //       time: '	E',
      //       winningNumber: [7, 4, 1, 3]
      //     }, {
      //       date: '06/26/17',
      //       time: '	E',
      //       winningNumber: [4, 2, 8, 4]
      //     }, {
      //       date: '09/09/17',
      //       time: '	M',
      //       winningNumber: [2, 2, 8, 8]
      //     }, {
      //       date: '08/15/17',
      //       time: '	M',
      //       winningNumber: [4, 4, 2, 8]
      //     }, {
      //       date: '07/21/17',
      //       time: '	M',
      //       winningNumber: [2, 6, 6, 0]
      //     }, {
      //       date: '06/26/17',
      //       time: '	M',
      //       winningNumber: [3, 0, 4, 2]
      //     }, {
      //       date: '09/08/17',
      //       time: '	E',
      //       winningNumber: [0, 5, 7, 8]
      //     }, {
      //       date: '08/14/17',
      //       time: '	E',
      //       winningNumber: [9, 1, 7, 6]
      //     }, {
      //       date: '07/20/17',
      //       time: '	E',
      //       winningNumber: [1, 5, 2, 3]
      //     }, {
      //       date: '06/25/17',
      //       time: '	E',
      //       winningNumber: [5, 3, 0, 1]
      //     }, {
      //       date: '09/08/17',
      //       time: '	M',
      //       winningNumber: [2, 9, 1, 1]
      //     }, {
      //       date: '08/14/17',
      //       time: '	M',
      //       winningNumber: [4, 5, 2, 8]
      //     }, {
      //       date: '07/20/17',
      //       time: '	M',
      //       winningNumber: [5, 0, 4, 1]
      //     }, {
      //       date: '06/25/17',
      //       time: '	M',
      //       winningNumber: [2, 6, 5, 2]
      //     }, {
      //       date: '09/07/17',
      //       time: '	E',
      //       winningNumber: [1, 4, 5, 5]
      //     }, {
      //       date: '08/13/17',
      //       time: '	E',
      //       winningNumber: [7, 1, 0, 1]
      //     }, {
      //       date: '07/19/17',
      //       time: '	E',
      //       winningNumber: [5, 8, 5, 3]
      //     }, {
      //       date: '06/24/17',
      //       time: '	E',
      //       winningNumber: [3, 5, 5, 0]
      //     }, {
      //       date: '09/07/17',
      //       time: '	M',
      //       winningNumber: [2, 7, 8, 0]
      //     }, {
      //       date: '08/13/17',
      //       time: '	M',
      //       winningNumber: [1, 5, 0, 3]
      //     }, {
      //       date: '07/19/17',
      //       time: '	M',
      //       winningNumber: [3, 7, 9, 2]
      //     }, {
      //       date: '06/24/17',
      //       time: '	M',
      //       winningNumber: [4, 5, 5, 4]
      //     }, {
      //       date: '09/06/17',
      //       time: '	E',
      //       winningNumber: [7, 3, 1, 0]
      //     }, {
      //       date: '08/12/17',
      //       time: '	E',
      //       winningNumber: [8, 7, 3, 7]
      //     }, {
      //       date: '07/18/17',
      //       time: '	E',
      //       winningNumber: [6, 9, 3, 7]
      //     }, {
      //       date: '06/23/17',
      //       time: '	E',
      //       winningNumber: [5, 3, 4, 8]
      //     }, {
      //       date: '09/06/17',
      //       time: '	M',
      //       winningNumber: [1, 3, 0, 1]
      //     }, {
      //       date: '08/12/17',
      //       time: '	M',
      //       winningNumber: [7, 1, 7, 7]
      //     }, {
      //       date: '07/18/17',
      //       time: '	M',
      //       winningNumber: [2, 1, 7, 4]
      //     }, {
      //       date: '06/23/17',
      //       time: '	M',
      //       winningNumber: [5, 2, 6, 9]
      //     }, {
      //       date: '09/05/17',
      //       time: '	E',
      //       winningNumber: [6, 2, 8, 5]
      //     }, {
      //       date: '08/11/17',
      //       time: '	E',
      //       winningNumber: [6, 5, 6, 6]
      //     }, {
      //       date: '07/17/17',
      //       time: '	E',
      //       winningNumber: [1, 1, 9, 7]
      //     }, {
      //       date: '06/22/17',
      //       time: '	E',
      //       winningNumber: [7, 2, 1, 7]
      //     }, {
      //       date: '09/05/17',
      //       time: '	M',
      //       winningNumber: [9, 2, 2, 2]
      //     }, {
      //       date: '08/11/17',
      //       time: '	M',
      //       winningNumber: [5, 6, 8, 8]
      //     }, {
      //       date: '07/17/17',
      //       time: '	M',
      //       winningNumber: [7, 5, 3, 3]
      //     }, {
      //       date: '06/22/17',
      //       time: '	M',
      //       winningNumber: [6, 3, 5, 5]
      //     }, {
      //       date: '09/04/17',
      //       time: '	E',
      //       winningNumber: [1, 4, 1, 3]
      //     }, {
      //       date: '08/10/17',
      //       time: '	E',
      //       winningNumber: [5, 7, 2, 3]
      //     }, {
      //       date: '07/16/17',
      //       time: '	E',
      //       winningNumber: [3, 7, 1, 4]
      //     }, {
      //       date: '06/21/17',
      //       time: '	E',
      //       winningNumber: [9, 8, 3, 5]
      //     }, {
      //       date: '09/04/17',
      //       time: '	M',
      //       winningNumber: [5, 8, 5, 4]
      //     }, {
      //       date: '08/10/17',
      //       time: '	M',
      //       winningNumber: [3, 1, 3, 9]
      //     }, {
      //       date: '07/16/17',
      //       time: '	M',
      //       winningNumber: [2, 5, 1, 5]
      //     }, {
      //       date: '06/21/17',
      //       time: '	M',
      //       winningNumber: [4, 1, 5, 5]
      //     }, {
      //       date: '09/03/17',
      //       time: '	E',
      //       winningNumber: [2, 6, 3, 5]
      //     }, {
      //       date: '08/09/17',
      //       time: '	E',
      //       winningNumber: [1, 0, 3, 4]
      //     }, {
      //       date: '07/15/17',
      //       time: '	E',
      //       winningNumber: [1, 6, 6, 0]
      //     }, {
      //       date: '06/20/17',
      //       time: '	E',
      //       winningNumber: [0, 3, 0, 5]
      //     }, {
      //       date: '09/03/17',
      //       time: '	M',
      //       winningNumber: [1, 9, 1, 1]
      //     }, {
      //       date: '08/09/17',
      //       time: '	M',
      //       winningNumber: [6, 4, 9, 1]
      //     }, {
      //       date: '07/15/17',
      //       time: '	M',
      //       winningNumber: [6, 6, 6, 2]
      //     }, {
      //       date: '06/20/17',
      //       time: '	M',
      //       winningNumber: [5, 2, 1, 8]
      //     }, {
      //       date: '09/02/17',
      //       time: '	E',
      //       winningNumber: [8, 0, 2, 3]
      //     }, {
      //       date: '08/08/17',
      //       time: '	E',
      //       winningNumber: [0, 3, 7, 7]
      //     }, {
      //       date: '07/14/17',
      //       time: '	E',
      //       winningNumber: [0, 0, 6, 1]
      //     }, {
      //       date: '06/19/17',
      //       time: '	E',
      //       winningNumber: [6, 4, 8, 1]
      //     }, {
      //       date: '09/02/17',
      //       time: '	M',
      //       winningNumber: [1, 2, 1, 5]
      //     }, {
      //       date: '08/08/17',
      //       time: '	M',
      //       winningNumber: [7, 1, 9, 2]
      //     }, {
      //       date: '07/14/17',
      //       time: '	M',
      //       winningNumber: [4, 2, 8, 2]
      //     }, {
      //       date: '06/19/17',
      //       time: '	M',
      //       winningNumber: [5, 3, 6, 0]
      //     }, {
      //       date: '09/01/17',
      //       time: '	E',
      //       winningNumber: [8, 0, 5, 5]
      //     }, {
      //       date: '08/07/17',
      //       time: '	E',
      //       winningNumber: [9, 4, 3, 0]
      //     }, {
      //       date: '07/13/17',
      //       time: '	E',
      //       winningNumber: [7, 8, 4, 8]
      //     }, {
      //       date: '06/18/17',
      //       time: '	E',
      //       winningNumber: [5, 3, 9, 2]
      //     }, {
      //       date: '09/01/17',
      //       time: '	M',
      //       winningNumber: [0, 4, 0, 6]
      //     }, {
      //       date: '08/07/17',
      //       time: '	M',
      //       winningNumber: [1, 2, 8, 6]
      //     }, {
      //       date: '07/13/17',
      //       time: '	M',
      //       winningNumber: [6, 8, 3, 4]
      //     }, {
      //       date: '06/18/17',
      //       time: '	M',
      //       winningNumber: [8, 0, 2, 3]
      //     }, {
      //       date: '08/31/17',
      //       time: '	E',
      //       winningNumber: [7, 3, 7, 8]
      //     }, {
      //       date: '08/06/17',
      //       time: '	E',
      //       winningNumber: [1, 6, 9, 2]
      //     }, {
      //       date: '07/12/17',
      //       time: '	E',
      //       winningNumber: [8, 5, 8, 4]
      //     }, {
      //       date: '06/17/17',
      //       time: '	E',
      //       winningNumber: [7, 8, 9, 5]
      //     }, {
      //       date: '08/31/17',
      //       time: '	M',
      //       winningNumber: [4, 3, 7, 8]
      //     }, {
      //       date: '08/06/17',
      //       time: '	M',
      //       winningNumber: [8, 4, 3, 2]
      //     }, {
      //       date: '07/12/17',
      //       time: '	M',
      //       winningNumber: [4, 3, 3, 8]
      //     }, {
      //       date: '06/17/17',
      //       time: '	M',
      //       winningNumber: [9, 6, 6, 0]
      //     }, {
      //       date: '08/30/17',
      //       time: '	E',
      //       winningNumber: [3, 1, 1, 5]
      //     }, {
      //       date: '08/05/17',
      //       time: '	E',
      //       winningNumber: [8, 5, 0, 2]
      //     }, {
      //       date: '07/11/17',
      //       time: '	E',
      //       winningNumber: [0, 7, 5, 0]
      //     }, {
      //       date: '06/16/17',
      //       time: '	E',
      //       winningNumber: [7, 8, 6, 1]
      //     }, {
      //       date: '08/30/17',
      //       time: '	M',
      //       winningNumber: [0, 9, 1, 4]
      //     }, {
      //       date: '08/05/17',
      //       time: '	M',
      //       winningNumber: [6, 9, 7, 4]
      //     }, {
      //       date: '07/11/17',
      //       time: '	M',
      //       winningNumber: [1, 0, 1, 0]
      //     }, {
      //       date: '06/16/17',
      //       time: '	M',
      //       winningNumber: [6, 2, 7, 5]
      //     }, {
      //       date: '08/29/17',
      //       time: '	E',
      //       winningNumber: [5, 3, 6, 4]
      //     }, {
      //       date: '08/04/17',
      //       time: '	E',
      //       winningNumber: [2, 1, 5, 9]
      //     }, {
      //       date: '07/10/17',
      //       time: '	E',
      //       winningNumber: [7, 5, 3, 2]
      //     }, {
      //       date: '06/15/17',
      //       time: '	E',
      //       winningNumber: [7, 5, 4, 6]
      //     }, {
      //       date: '08/29/17',
      //       time: '	M',
      //       winningNumber: [9, 3, 0, 2]
      //     }, {
      //       date: '08/04/17',
      //       time: '	M',
      //       winningNumber: [8, 7, 3, 2]
      //     }, {
      //       date: '07/10/17',
      //       time: '	M',
      //       winningNumber: [8, 5, 5, 3]
      //     }, {
      //       date: '06/15/17',
      //       time: '	M',
      //       winningNumber: [8, 9, 7, 2]
      //     }, {
      //       date: '08/28/17',
      //       time: '	E',
      //       winningNumber: [0, 1, 4, 8]
      //     }, {
      //       date: '08/03/17',
      //       time: '	E',
      //       winningNumber: [0, 9, 3, 5]
      //     }, {
      //       date: '07/09/17',
      //       time: '	E',
      //       winningNumber: [1, 6, 2, 2]
      //     }, {
      //       date: '06/14/17',
      //       time: '	E',
      //       winningNumber: [0, 5, 3, 8]
      //     }, {
      //       date: '08/28/17',
      //       time: '	M',
      //       winningNumber: [1, 9, 9, 0]
      //     }, {
      //       date: '08/03/17',
      //       time: '	M',
      //       winningNumber: [7, 5, 7, 9]
      //     }, {
      //       date: '07/09/17',
      //       time: '	M',
      //       winningNumber: [4, 0, 0, 8]
      //     }, {
      //       date: '06/14/17',
      //       time: '	M',
      //       winningNumber: [8, 4, 0, 4]
      //     }, {
      //       date: '08/27/17',
      //       time: '	E',
      //       winningNumber: [5, 1, 3, 4]
      //     }, {
      //       date: '08/02/17',
      //       time: '	E',
      //       winningNumber: [6, 7, 5, 6]
      //     }, {
      //       date: '07/08/17',
      //       time: '	E',
      //       winningNumber: [9, 3, 8, 4]
      //     }, {
      //       date: '06/13/17',
      //       time: '	E',
      //       winningNumber: [5, 1, 4, 2]
      //     }, {
      //       date: '08/27/17',
      //       time: '	M',
      //       winningNumber: [3, 2, 2, 5]
      //     }, {
      //       date: '08/02/17',
      //       time: '	M',
      //       winningNumber: [7, 7, 0, 4]
      //     }, {
      //       date: '07/08/17',
      //       time: '	M',
      //       winningNumber: [7, 3, 4, 0]
      //     }, {
      //       date: '06/13/17',
      //       time: '	M',
      //       winningNumber: [5, 6, 1, 5]
      //     }, {
      //       date: '08/26/17',
      //       time: '	E',
      //       winningNumber: [7, 5, 9, 0]
      //     }, {
      //       date: '08/01/17',
      //       time: '	E',
      //       winningNumber: [1, 3, 3, 3]
      //     }, {
      //       date: '07/07/17',
      //       time: '	E',
      //       winningNumber: [5, 1, 6, 6]
      //     }, {
      //       date: '06/12/17',
      //       time: '	E',
      //       winningNumber: [4, 6, 2, 4]
      //     }, {
      //       date: '08/26/17',
      //       time: '	M',
      //       winningNumber: [4, 8, 7, 2]
      //     }, {
      //       date: '08/01/17',
      //       time: '	M',
      //       winningNumber: [0, 4, 3, 3]
      //     }, {
      //       date: '07/07/17',
      //       time: '	M',
      //       winningNumber: [0, 2, 4, 9]
      //     }, {
      //       date: '06/12/17',
      //       time: '	M',
      //       winningNumber: [3, 0, 9, 2]
      //     }, {
      //       date: '08/25/17',
      //       time: '	E',
      //       winningNumber: [7, 5, 0, 2]
      //     }, {
      //       date: '07/31/17',
      //       time: '	E',
      //       winningNumber: [7, 5, 0, 7]
      //     }, {
      //       date: '07/06/17',
      //       time: '	E',
      //       winningNumber: [2, 0, 3, 0]
      //     }, {
      //       date: '06/11/17',
      //       time: '	E',
      //       winningNumber: [9, 8, 1, 8]
      //     }, {
      //       date: '08/25/17',
      //       time: '	M',
      //       winningNumber: [6, 9, 6, 7]
      //     }, {
      //       date: '07/31/17',
      //       time: '	M',
      //       winningNumber: [2, 2, 1, 7]
      //     }, {
      //       date: '07/06/17',
      //       time: '	M',
      //       winningNumber: [5, 8, 7, 5]
      //     }, {
      //       date: '06/11/17',
      //       time: '	M',
      //       winningNumber: [5, 2, 0, 6]
      //     }, {
      //       date: '08/24/17',
      //       time: '	E',
      //       winningNumber: [5, 4, 6, 9]
      //     }, {
      //       date: '07/30/17',
      //       time: '	E',
      //       winningNumber: [7, 1, 6, 3]
      //     }, {
      //       date: '07/05/17',
      //       time: '	E',
      //       winningNumber: [7, 3, 4, 5]
      //     }, {
      //       date: '06/10/17',
      //       time: '	E',
      //       winningNumber: [1, 6, 2, 9]
      //     }, {
      //       date: '08/24/17',
      //       time: '	M',
      //       winningNumber: [8, 0, 2, 2]
      //     }, {
      //       date: '07/30/17',
      //       time: '	M',
      //       winningNumber: [1, 0, 3, 0]
      //     }, {
      //       date: '07/05/17',
      //       time: '	M',
      //       winningNumber: [9, 4, 9, 0]
      //     }, {
      //       date: '06/10/17',
      //       time: '	M',
      //       winningNumber: [0, 9, 5, 8]
      //     }, {
      //       date: '08/23/17',
      //       time: '	E',
      //       winningNumber: [7, 7, 7, 4]
      //     }, {
      //       date: '07/29/17',
      //       time: '	E',
      //       winningNumber: [3, 3, 6, 0]
      //     }, {
      //       date: '07/04/17',
      //       time: '	E',
      //       winningNumber: [3, 3, 9, 1]
      //     }, {
      //       date: '06/09/17',
      //       time: '	E',
      //       winningNumber: [6, 2, 0, 3]
      //     }, {
      //       date: '08/23/17',
      //       time: '	M',
      //       winningNumber: [7, 8, 0, 4]
      //     }, {
      //       date: '07/29/17',
      //       time: '	M',
      //       winningNumber: [0, 3, 7, 3]
      //     }, {
      //       date: '07/04/17',
      //       time: '	M',
      //       winningNumber: [3, 6, 8, 3]
      //     }, {
      //       date: '06/09/17',
      //       time: '	M',
      //       winningNumber: [8, 1, 5, 0]
      //     }, {
      //       date: '08/22/17',
      //       time: '	E',
      //       winningNumber: [1, 4, 1, 6]
      //     }, {
      //       date: '07/28/17',
      //       time: '	E',
      //       winningNumber: [4, 7, 8, 6]
      //     }, {
      //       date: '07/03/17',
      //       time: '	E',
      //       winningNumber: [2, 6, 0, 5]
      //     }, {
      //       date: '06/08/17',
      //       time: '	E',
      //       winningNumber: [7, 2, 3, 3]
      //     }, {
      //       date: '08/22/17',
      //       time: '	M',
      //       winningNumber: [3, 3, 6, 8]
      //     }, {
      //       date: '07/28/17',
      //       time: '	M',
      //       winningNumber: [1, 0, 4, 7]
      //     }, {
      //       date: '07/03/17',
      //       time: '	M',
      //       winningNumber: [0, 2, 9, 3]
      //     }, {
      //       date: '06/08/17',
      //       time: '	M',
      //       winningNumber: [6, 8, 8, 9]
      //     }, {
      //       date: '08/21/17',
      //       time: '	E',
      //       winningNumber: [3, 2, 6, 5]
      //     }, {
      //       date: '07/27/17',
      //       time: '	E',
      //       winningNumber: [6, 7, 0, 3]
      //     }, {
      //       date: '07/02/17',
      //       time: '	E',
      //       winningNumber: [2, 0, 5, 1]
      //     }, {
      //       date: '06/07/17',
      //       time: '	E',
      //       winningNumber: [5, 3, 6, 0]
      //     }, {
      //       date: '08/21/17',
      //       time: '	M',
      //       winningNumber: [1, 0, 9, 5]
      //     }, {
      //       date: '07/27/17',
      //       time: '	M',
      //       winningNumber: [2, 5, 3, 3]
      //     }, {
      //       date: '07/02/17',
      //       time: '	M',
      //       winningNumber: [6, 8, 9, 0]
      //     }, {
      //       date: '06/07/17',
      //       time: '	M',
      //       winningNumber: [8, 0, 8, 8]
      //     }, {
      //       date: '08/20/17',
      //       time: '	E',
      //       winningNumber: [3, 7, 7, 6]
      //     }, {
      //       date: '07/26/17',
      //       time: '	E',
      //       winningNumber: [0, 4, 8, 5]
      //     }, {
      //       date: '07/01/17',
      //       time: '	E',
      //       winningNumber: [0, 9, 9, 9]
      //     }, {
      //       date: '06/06/17',
      //       time: '	E',
      //       winningNumber: [6, 8, 1, 3]
      //     }, {
      //       date: '08/20/17',
      //       time: '	M',
      //       winningNumber: [0, 8, 7, 2]
      //     }, {
      //       date: '07/26/17',
      //       time: '	M',
      //       winningNumber: [1, 0, 1, 8]
      //     }, {
      //       date: '07/01/17',
      //       time: '	M',
      //       winningNumber: [0, 7, 3, 0]
      //     }, {
      //       date: '06/06/17',
      //       time: '	M',
      //       winningNumber: [4, 9, 2, 6]
      //     }, {
      //       date: '08/19/17',
      //       time: '	E',
      //       winningNumber: [8, 5, 2, 2]
      //     }, {
      //       date: '07/25/17',
      //       time: '	E',
      //       winningNumber: [2, 6, 7, 4]
      //     }, {
      //       date: '06/30/17',
      //       time: '	E',
      //       winningNumber: [3, 1, 7, 5]
      //     }, {
      //       date: '06/05/17',
      //       time: '	E',
      //       winningNumber: [1, 7, 9, 8]
      //     }, {
      //       date: '08/19/17',
      //       time: '	M',
      //       winningNumber: [9, 7, 1, 9]
      //     }, {
      //       date: '07/25/17',
      //       time: '	M',
      //       winningNumber: [0, 1, 4, 7]
      //     }, {
      //       date: '06/30/17',
      //       time: '	M',
      //       winningNumber: [1, 0, 7, 9]
      //     }, {
      //       date: '06/05/17',
      //       time: '	M',
      //       winningNumber: [8, 1, 7, 9]
      //     }, {
      //       date: '08/18/17',
      //       time: '	E',
      //       winningNumber: [9, 0, 4, 5]
      //     }, {
      //       date: '07/24/17',
      //       time: '	E',
      //       winningNumber: [6, 1, 2, 2]
      //     }, {
      //       date: '06/29/17',
      //       time: '	E',
      //       winningNumber: [8, 8, 7, 0]
      //     }, {
      //       date: '06/04/17',
      //       time: '	E',
      //       winningNumber: [7, 0, 9, 4]
      //     }, {
      //       date: '08/18/17',
      //       time: '	M',
      //       winningNumber: [0, 5, 4, 9]
      //     }, {
      //       date: '07/24/17',
      //       time: '	M',
      //       winningNumber: [0, 0, 2, 6]
      //     }, {
      //       date: '06/29/17',
      //       time: '	M',
      //       winningNumber: [4, 1, 9, 3]
      //     }, {
      //       date: '06/04/17',
      //       time: '	M',
      //       winningNumber: [8, 9, 5, 7]
      //     }, {
      //       date: '06/03/17',
      //       time: '	E',
      //       winningNumber: [0, 2, 1, 5]
      //     }, {
      //       date: '05/09/17',
      //       time: '	E',
      //       winningNumber: [7, 8, 7, 3]
      //     }, {
      //       date: '04/14/17',
      //       time: '	E',
      //       winningNumber: [7, 7, 2, 3]
      //     }, {
      //       date: '03/20/17',
      //       time: '	E',
      //       winningNumber: [9, 6, 1, 0]
      //     }, {
      //       date: '06/03/17',
      //       time: '	M',
      //       winningNumber: [4, 2, 9, 3]
      //     }, {
      //       date: '05/09/17',
      //       time: '	M',
      //       winningNumber: [9, 6, 3, 8]
      //     }, {
      //       date: '04/14/17',
      //       time: '	M',
      //       winningNumber: [3, 8, 6, 0]
      //     }, {
      //       date: '03/20/17',
      //       time: '	M',
      //       winningNumber: [4, 6, 2, 6]
      //     }, {
      //       date: '06/02/17',
      //       time: '	E',
      //       winningNumber: [1, 0, 5, 4]
      //     }, {
      //       date: '05/08/17',
      //       time: '	E',
      //       winningNumber: [6, 2, 3, 9]
      //     }, {
      //       date: '04/13/17',
      //       time: '	E',
      //       winningNumber: [6, 5, 6, 6]
      //     }, {
      //       date: '03/19/17',
      //       time: '	E',
      //       winningNumber: [0, 4, 2, 9]
      //     }, {
      //       date: '06/02/17',
      //       time: '	M',
      //       winningNumber: [1, 7, 1, 7]
      //     }, {
      //       date: '05/08/17',
      //       time: '	M',
      //       winningNumber: [9, 6, 5, 3]
      //     }, {
      //       date: '04/13/17',
      //       time: '	M',
      //       winningNumber: [0, 1, 4, 2]
      //     }, {
      //       date: '03/19/17',
      //       time: '	M',
      //       winningNumber: [8, 4, 4, 6]
      //     }, {
      //       date: '06/01/17',
      //       time: '	E',
      //       winningNumber: [5, 6, 5, 6]
      //     }, {
      //       date: '05/07/17',
      //       time: '	E',
      //       winningNumber: [7, 9, 9, 7]
      //     }, {
      //       date: '04/12/17',
      //       time: '	E',
      //       winningNumber: [3, 4, 4, 3]
      //     }, {
      //       date: '03/18/17',
      //       time: '	E',
      //       winningNumber: [6, 9, 5, 1]
      //     }, {
      //       date: '06/01/17',
      //       time: '	M',
      //       winningNumber: [1, 7, 9, 1]
      //     }, {
      //       date: '05/07/17',
      //       time: '	M',
      //       winningNumber: [6, 4, 4, 4]
      //     }, {
      //       date: '04/12/17',
      //       time: '	M',
      //       winningNumber: [1, 8, 3, 9]
      //     }, {
      //       date: '03/18/17',
      //       time: '	M',
      //       winningNumber: [2, 8, 4, 6]
      //     }, {
      //       date: '05/31/17',
      //       time: '	E',
      //       winningNumber: [3, 7, 7, 6]
      //     }, {
      //       date: '05/06/17',
      //       time: '	E',
      //       winningNumber: [2, 3, 1, 7]
      //     }, {
      //       date: '04/11/17',
      //       time: '	E',
      //       winningNumber: [5, 7, 4, 9]
      //     }, {
      //       date: '03/17/17',
      //       time: '	E',
      //       winningNumber: [2, 5, 7, 7]
      //     }, {
      //       date: '05/31/17',
      //       time: '	M',
      //       winningNumber: [5, 0, 9, 8]
      //     }, {
      //       date: '05/06/17',
      //       time: '	M',
      //       winningNumber: [3, 1, 7, 8]
      //     }, {
      //       date: '04/11/17',
      //       time: '	M',
      //       winningNumber: [7, 0, 4, 2]
      //     }, {
      //       date: '03/17/17',
      //       time: '	M',
      //       winningNumber: [4, 9, 3, 6]
      //     }, {
      //       date: '05/30/17',
      //       time: '	E',
      //       winningNumber: [3, 9, 2, 5]
      //     }, {
      //       date: '05/05/17',
      //       time: '	E',
      //       winningNumber: [7, 7, 3, 6]
      //     }, {
      //       date: '04/10/17',
      //       time: '	E',
      //       winningNumber: [2, 9, 2, 5]
      //     }, {
      //       date: '03/16/17',
      //       time: '	E',
      //       winningNumber: [4, 5, 7, 2]
      //     }, {
      //       date: '05/30/17',
      //       time: '	M',
      //       winningNumber: [3, 1, 9, 5]
      //     }, {
      //       date: '05/05/17',
      //       time: '	M',
      //       winningNumber: [5, 7, 3, 8]
      //     }, {
      //       date: '04/10/17',
      //       time: '	M',
      //       winningNumber: [6, 9, 2, 0]
      //     }, {
      //       date: '03/16/17',
      //       time: '	M',
      //       winningNumber: [2, 3, 5, 8]
      //     }, {
      //       date: '05/29/17',
      //       time: '	E',
      //       winningNumber: [4, 4, 5, 8]
      //     }, {
      //       date: '05/04/17',
      //       time: '	E',
      //       winningNumber: [6, 4, 4, 3]
      //     }, {
      //       date: '04/09/17',
      //       time: '	E',
      //       winningNumber: [3, 8, 9, 8]
      //     }, {
      //       date: '03/15/17',
      //       time: '	E',
      //       winningNumber: [0, 5, 8, 6]
      //     }, {
      //       date: '05/29/17',
      //       time: '	M',
      //       winningNumber: [5, 9, 7, 4]
      //     }, {
      //       date: '05/04/17',
      //       time: '	M',
      //       winningNumber: [2, 2, 5, 1]
      //     }, {
      //       date: '04/09/17',
      //       time: '	M',
      //       winningNumber: [1, 8, 8, 8]
      //     }, {
      //       date: '03/15/17',
      //       time: '	M',
      //       winningNumber: [0, 5, 5, 3]
      //     }, {
      //       date: '05/28/17',
      //       time: '	E',
      //       winningNumber: [6, 5, 0, 3]
      //     }, {
      //       date: '05/03/17',
      //       time: '	E',
      //       winningNumber: [5, 3, 6, 2]
      //     }, {
      //       date: '04/08/17',
      //       time: '	E',
      //       winningNumber: [3, 4, 2, 8]
      //     }, {
      //       date: '03/14/17',
      //       time: '	E',
      //       winningNumber: [1, 3, 8, 7]
      //     }, {
      //       date: '05/28/17',
      //       time: '	M',
      //       winningNumber: [4, 1, 0, 1]
      //     }, {
      //       date: '05/03/17',
      //       time: '	M',
      //       winningNumber: [0, 6, 3, 3]
      //     }, {
      //       date: '04/08/17',
      //       time: '	M',
      //       winningNumber: [0, 2, 3, 1]
      //     }, {
      //       date: '03/14/17',
      //       time: '	M',
      //       winningNumber: [6, 0, 4, 2]
      //     }, {
      //       date: '05/27/17',
      //       time: '	E',
      //       winningNumber: [2, 4, 6, 0]
      //     }, {
      //       date: '05/02/17',
      //       time: '	E',
      //       winningNumber: [7, 8, 4, 6]
      //     }, {
      //       date: '04/07/17',
      //       time: '	E',
      //       winningNumber: [9, 7, 0, 2]
      //     }, {
      //       date: '03/13/17',
      //       time: '	E',
      //       winningNumber: [8, 5, 5, 8]
      //     }, {
      //       date: '05/27/17',
      //       time: '	M',
      //       winningNumber: [6, 6, 1, 4]
      //     }, {
      //       date: '05/02/17',
      //       time: '	M',
      //       winningNumber: [6, 7, 3, 0]
      //     }, {
      //       date: '04/07/17',
      //       time: '	M',
      //       winningNumber: [2, 4, 5, 5]
      //     }, {
      //       date: '03/13/17',
      //       time: '	M',
      //       winningNumber: [7, 9, 5, 0]
      //     }, {
      //       date: '05/26/17',
      //       time: '	E',
      //       winningNumber: [2, 5, 2, 9]
      //     }, {
      //       date: '05/01/17',
      //       time: '	E',
      //       winningNumber: [7, 6, 1, 1]
      //     }, {
      //       date: '04/06/17',
      //       time: '	E',
      //       winningNumber: [7, 6, 4, 1]
      //     }, {
      //       date: '03/12/17',
      //       time: '	E',
      //       winningNumber: [9, 4, 9, 7]
      //     }, {
      //       date: '05/26/17',
      //       time: '	M',
      //       winningNumber: [3, 8, 1, 3]
      //     }, {
      //       date: '05/01/17',
      //       time: '	M',
      //       winningNumber: [4, 0, 0, 8]
      //     }, {
      //       date: '04/06/17',
      //       time: '	M',
      //       winningNumber: [9, 9, 0, 5]
      //     }, {
      //       date: '03/12/17',
      //       time: '	M',
      //       winningNumber: [9, 9, 9, 0]
      //     }, {
      //       date: '05/25/17',
      //       time: '	E',
      //       winningNumber: [5, 7, 9, 4]
      //     }, {
      //       date: '04/30/17',
      //       time: '	E',
      //       winningNumber: [4, 4, 9, 8]
      //     }, {
      //       date: '04/05/17',
      //       time: '	E',
      //       winningNumber: [1, 8, 9, 1]
      //     }, {
      //       date: '03/11/17',
      //       time: '	E',
      //       winningNumber: [6, 0, 7, 0]
      //     }, {
      //       date: '05/25/17',
      //       time: '	M',
      //       winningNumber: [3, 5, 5, 2]
      //     }, {
      //       date: '04/30/17',
      //       time: '	M',
      //       winningNumber: [2, 1, 8, 0]
      //     }, {
      //       date: '04/05/17',
      //       time: '	M',
      //       winningNumber: [2, 1, 5, 1]
      //     }, {
      //       date: '03/11/17',
      //       time: '	M',
      //       winningNumber: [7, 4, 4, 0]
      //     }, {
      //       date: '05/24/17',
      //       time: '	E',
      //       winningNumber: [2, 1, 4, 3]
      //     }, {
      //       date: '04/29/17',
      //       time: '	E',
      //       winningNumber: [3, 4, 6, 7]
      //     }, {
      //       date: '04/04/17',
      //       time: '	E',
      //       winningNumber: [6, 5, 7, 4]
      //     }, {
      //       date: '03/10/17',
      //       time: '	E',
      //       winningNumber: [0, 7, 5, 0]
      //     }, {
      //       date: '05/24/17',
      //       time: '	M',
      //       winningNumber: [2, 7, 4, 0]
      //     }, {
      //       date: '04/29/17',
      //       time: '	M',
      //       winningNumber: [4, 2, 1, 6]
      //     }, {
      //       date: '04/04/17',
      //       time: '	M',
      //       winningNumber: [1, 3, 5, 9]
      //     }, {
      //       date: '03/10/17',
      //       time: '	M',
      //       winningNumber: [8, 2, 0, 4]
      //     }, {
      //       date: '05/23/17',
      //       time: '	E',
      //       winningNumber: [7, 4, 3, 8]
      //     }, {
      //       date: '04/28/17',
      //       time: '	E',
      //       winningNumber: [1, 5, 5, 6]
      //     }, {
      //       date: '04/03/17',
      //       time: '	E',
      //       winningNumber: [7, 0, 7, 5]
      //     }, {
      //       date: '03/09/17',
      //       time: '	E',
      //       winningNumber: [4, 7, 4, 3]
      //     }, {
      //       date: '05/23/17',
      //       time: '	M',
      //       winningNumber: [1, 9, 4, 4]
      //     }, {
      //       date: '04/28/17',
      //       time: '	M',
      //       winningNumber: [8, 6, 1, 5]
      //     }, {
      //       date: '04/03/17',
      //       time: '	M',
      //       winningNumber: [0, 9, 6, 0]
      //     }, {
      //       date: '03/09/17',
      //       time: '	M',
      //       winningNumber: [7, 4, 0, 1]
      //     }, {
      //       date: '05/22/17',
      //       time: '	E',
      //       winningNumber: [0, 8, 7, 4]
      //     }, {
      //       date: '04/27/17',
      //       time: '	E',
      //       winningNumber: [7, 7, 8, 9]
      //     }, {
      //       date: '04/02/17',
      //       time: '	E',
      //       winningNumber: [7, 3, 6, 0]
      //     }, {
      //       date: '03/08/17',
      //       time: '	E',
      //       winningNumber: [0, 0, 6, 5]
      //     }, {
      //       date: '05/22/17',
      //       time: '	M',
      //       winningNumber: [7, 6, 2, 9]
      //     }, {
      //       date: '04/27/17',
      //       time: '	M',
      //       winningNumber: [7, 8, 4, 9]
      //     }, {
      //       date: '04/02/17',
      //       time: '	M',
      //       winningNumber: [7, 0, 1, 4]
      //     }, {
      //       date: '03/08/17',
      //       time: '	M',
      //       winningNumber: [9, 7, 1, 0]
      //     }, {
      //       date: '05/21/17',
      //       time: '	E',
      //       winningNumber: [3, 7, 4, 9]
      //     }, {
      //       date: '04/26/17',
      //       time: '	E',
      //       winningNumber: [1, 8, 2, 3]
      //     }, {
      //       date: '04/01/17',
      //       time: '	E',
      //       winningNumber: [2, 1, 7, 6]
      //     }, {
      //       date: '03/07/17',
      //       time: '	E',
      //       winningNumber: [4, 2, 2, 0]
      //     }, {
      //       date: '05/21/17',
      //       time: '	M',
      //       winningNumber: [0, 8, 9, 7]
      //     }, {
      //       date: '04/26/17',
      //       time: '	M',
      //       winningNumber: [3, 1, 8, 3]
      //     }, {
      //       date: '04/01/17',
      //       time: '	M',
      //       winningNumber: [9, 9, 4, 0]
      //     }, {
      //       date: '03/07/17',
      //       time: '	M',
      //       winningNumber: [0, 9, 0, 7]
      //     }, {
      //       date: '05/20/17',
      //       time: '	E',
      //       winningNumber: [1, 6, 2, 9]
      //     }, {
      //       date: '04/25/17',
      //       time: '	E',
      //       winningNumber: [6, 2, 5, 3]
      //     }, {
      //       date: '03/31/17',
      //       time: '	E',
      //       winningNumber: [5, 7, 6, 9]
      //     }, {
      //       date: '03/06/17',
      //       time: '	E',
      //       winningNumber: [7, 5, 4, 5]
      //     }, {
      //       date: '05/20/17',
      //       time: '	M',
      //       winningNumber: [2, 0, 3, 1]
      //     }, {
      //       date: '04/25/17',
      //       time: '	M',
      //       winningNumber: [5, 5, 7, 9]
      //     }, {
      //       date: '03/31/17',
      //       time: '	M',
      //       winningNumber: [5, 2, 6, 5]
      //     }, {
      //       date: '03/06/17',
      //       time: '	M',
      //       winningNumber: [0, 9, 9, 8]
      //     }, {
      //       date: '05/19/17',
      //       time: '	E',
      //       winningNumber: [0, 1, 0, 3]
      //     }, {
      //       date: '04/24/17',
      //       time: '	E',
      //       winningNumber: [8, 0, 7, 4]
      //     }, {
      //       date: '03/30/17',
      //       time: '	E',
      //       winningNumber: [7, 5, 7, 9]
      //     }, {
      //       date: '03/05/17',
      //       time: '	E',
      //       winningNumber: [0, 0, 9, 3]
      //     }, {
      //       date: '05/19/17',
      //       time: '	M',
      //       winningNumber: [1, 0, 7, 6]
      //     }, {
      //       date: '04/24/17',
      //       time: '	M',
      //       winningNumber: [2, 8, 1, 0]
      //     }, {
      //       date: '03/30/17',
      //       time: '	M',
      //       winningNumber: [1, 8, 4, 5]
      //     }, {
      //       date: '03/05/17',
      //       time: '	M',
      //       winningNumber: [6, 0, 2, 9]
      //     }, {
      //       date: '05/18/17',
      //       time: '	E',
      //       winningNumber: [9, 6, 5, 1]
      //     }, {
      //       date: '04/23/17',
      //       time: '	E',
      //       winningNumber: [3, 4, 9, 4]
      //     }, {
      //       date: '03/29/17',
      //       time: '	E',
      //       winningNumber: [7, 1, 1, 6]
      //     }, {
      //       date: '03/04/17',
      //       time: '	E',
      //       winningNumber: [2, 2, 7, 7]
      //     }, {
      //       date: '05/18/17',
      //       time: '	M',
      //       winningNumber: [7, 4, 9, 6]
      //     }, {
      //       date: '04/23/17',
      //       time: '	M',
      //       winningNumber: [6, 6, 0, 1]
      //     }, {
      //       date: '03/29/17',
      //       time: '	M',
      //       winningNumber: [1, 7, 5, 4]
      //     }, {
      //       date: '03/04/17',
      //       time: '	M',
      //       winningNumber: [3, 4, 0, 8]
      //     }, {
      //       date: '05/17/17',
      //       time: '	E',
      //       winningNumber: [9, 4, 9, 5]
      //     }, {
      //       date: '04/22/17',
      //       time: '	E',
      //       winningNumber: [6, 9, 1, 0]
      //     }, {
      //       date: '03/28/17',
      //       time: '	E',
      //       winningNumber: [5, 8, 9, 0]
      //     }, {
      //       date: '03/03/17',
      //       time: '	E',
      //       winningNumber: [6, 8, 2, 5]
      //     }, {
      //       date: '05/17/17',
      //       time: '	M',
      //       winningNumber: [6, 4, 1, 8]
      //     }, {
      //       date: '04/22/17',
      //       time: '	M',
      //       winningNumber: [9, 5, 7, 3]
      //     }, {
      //       date: '03/28/17',
      //       time: '	M',
      //       winningNumber: [7, 8, 5, 9]
      //     }, {
      //       date: '03/03/17',
      //       time: '	M',
      //       winningNumber: [5, 6, 0, 2]
      //     }, {
      //       date: '05/16/17',
      //       time: '	E',
      //       winningNumber: [5, 5, 1, 4]
      //     }, {
      //       date: '04/21/17',
      //       time: '	E',
      //       winningNumber: [0, 4, 1, 2]
      //     }, {
      //       date: '03/27/17',
      //       time: '	E',
      //       winningNumber: [1, 9, 0, 8]
      //     }, {
      //       date: '03/02/17',
      //       time: '	E',
      //       winningNumber: [9, 4, 7, 3]
      //     }, {
      //       date: '05/16/17',
      //       time: '	M',
      //       winningNumber: [8, 6, 1, 3]
      //     }, {
      //       date: '04/21/17',
      //       time: '	M',
      //       winningNumber: [3, 0, 0, 0]
      //     }, {
      //       date: '03/27/17',
      //       time: '	M',
      //       winningNumber: [7, 9, 7, 9]
      //     }, {
      //       date: '03/02/17',
      //       time: '	M',
      //       winningNumber: [7, 3, 2, 0]
      //     }, {
      //       date: '05/15/17',
      //       time: '	E',
      //       winningNumber: [5, 8, 7, 3]
      //     }, {
      //       date: '04/20/17',
      //       time: '	E',
      //       winningNumber: [4, 2, 3, 9]
      //     }, {
      //       date: '03/26/17',
      //       time: '	E',
      //       winningNumber: [7, 6, 6, 6]
      //     }, {
      //       date: '03/01/17',
      //       time: '	E',
      //       winningNumber: [2, 4, 9, 6]
      //     }, {
      //       date: '05/15/17',
      //       time: '	M',
      //       winningNumber: [0, 8, 7, 9]
      //     }, {
      //       date: '04/20/17',
      //       time: '	M',
      //       winningNumber: [6, 1, 6, 0]
      //     }, {
      //       date: '03/26/17',
      //       time: '	M',
      //       winningNumber: [4, 9, 2, 2]
      //     }, {
      //       date: '03/01/17',
      //       time: '	M',
      //       winningNumber: [0, 1, 7, 0]
      //     }, {
      //       date: '05/14/17',
      //       time: '	E',
      //       winningNumber: [2, 4, 6, 9]
      //     }, {
      //       date: '04/19/17',
      //       time: '	E',
      //       winningNumber: [0, 7, 8, 1]
      //     }, {
      //       date: '03/25/17',
      //       time: '	E',
      //       winningNumber: [9, 2, 8, 8]
      //     }, {
      //       date: '02/28/17',
      //       time: '	E',
      //       winningNumber: [0, 2, 6, 1]
      //     }, {
      //       date: '05/14/17',
      //       time: '	M',
      //       winningNumber: [8, 6, 2, 9]
      //     }, {
      //       date: '04/19/17',
      //       time: '	M',
      //       winningNumber: [8, 6, 3, 8]
      //     }, {
      //       date: '03/25/17',
      //       time: '	M',
      //       winningNumber: [5, 7, 9, 3]
      //     }, {
      //       date: '02/28/17',
      //       time: '	M',
      //       winningNumber: [2, 6, 4, 0]
      //     }, {
      //       date: '05/13/17',
      //       time: '	E',
      //       winningNumber: [1, 3, 4, 8]
      //     }, {
      //       date: '04/18/17',
      //       time: '	E',
      //       winningNumber: [9, 2, 7, 4]
      //     }, {
      //       date: '03/24/17',
      //       time: '	E',
      //       winningNumber: [3, 9, 3, 4]
      //     }, {
      //       date: '02/27/17',
      //       time: '	E',
      //       winningNumber: [0, 7, 1, 3]
      //     }, {
      //       date: '05/13/17',
      //       time: '	M',
      //       winningNumber: [5, 3, 2, 8]
      //     }, {
      //       date: '04/18/17',
      //       time: '	M',
      //       winningNumber: [9, 1, 2, 2]
      //     }, {
      //       date: '03/24/17',
      //       time: '	M',
      //       winningNumber: [6, 0, 7, 5]
      //     }, {
      //       date: '02/27/17',
      //       time: '	M',
      //       winningNumber: [6, 7, 0, 4]
      //     }, {
      //       date: '05/12/17',
      //       time: '	E',
      //       winningNumber: [9, 6, 6, 2]
      //     }, {
      //       date: '04/17/17',
      //       time: '	E',
      //       winningNumber: [5, 9, 5, 0]
      //     }, {
      //       date: '03/23/17',
      //       time: '	E',
      //       winningNumber: [8, 7, 7, 4]
      //     }, {
      //       date: '02/26/17',
      //       time: '	E',
      //       winningNumber: [7, 5, 8, 2]
      //     }, {
      //       date: '05/12/17',
      //       time: '	M',
      //       winningNumber: [4, 6, 1, 7]
      //     }, {
      //       date: '04/17/17',
      //       time: '	M',
      //       winningNumber: [2, 7, 2, 2]
      //     }, {
      //       date: '03/23/17',
      //       time: '	M',
      //       winningNumber: [2, 2, 2, 7]
      //     }, {
      //       date: '02/26/17',
      //       time: '	M',
      //       winningNumber: [2, 8, 6, 8]
      //     }, {
      //       date: '05/11/17',
      //       time: '	E',
      //       winningNumber: [4, 3, 9, 1]
      //     }, {
      //       date: '04/16/17',
      //       time: '	E',
      //       winningNumber: [2, 0, 0, 8]
      //     }, {
      //       date: '03/22/17',
      //       time: '	E',
      //       winningNumber: [6, 2, 1, 2]
      //     }, {
      //       date: '02/25/17',
      //       time: '	E',
      //       winningNumber: [2, 2, 0, 8]
      //     }, {
      //       date: '05/11/17',
      //       time: '	M',
      //       winningNumber: [5, 1, 5, 6]
      //     }, {
      //       date: '04/16/17',
      //       time: '	M',
      //       winningNumber: [7, 4, 9, 6]
      //     }, {
      //       date: '03/22/17',
      //       time: '	M',
      //       winningNumber: [5, 9, 6, 2]
      //     }, {
      //       date: '02/25/17',
      //       time: '	M',
      //       winningNumber: [5, 4, 9, 6]
      //     }, {
      //       date: '05/10/17',
      //       time: '	E',
      //       winningNumber: [3, 0, 0, 5]
      //     }, {
      //       date: '04/15/17',
      //       time: '	E',
      //       winningNumber: [4, 7, 1, 4]
      //     }, {
      //       date: '03/21/17',
      //       time: '	E',
      //       winningNumber: [8, 8, 0, 8]
      //     }, {
      //       date: '02/24/17',
      //       time: '	E',
      //       winningNumber: [8, 1, 0, 6]
      //     }, {
      //       date: '05/10/17',
      //       time: '	M',
      //       winningNumber: [8, 0, 3, 7]
      //     }, {
      //       date: '04/15/17',
      //       time: '	M',
      //       winningNumber: [8, 0, 5, 8]
      //     }, {
      //       date: '03/21/17',
      //       time: '	M',
      //       winningNumber: [2, 3, 1, 9]
      //     }, {
      //       date: '02/24/17',
      //       time: '	M',
      //       winningNumber: [5, 6, 3, 5]
      //     }, {
      //       date: '02/23/17',
      //       time: '	E',
      //       winningNumber: [5, 0, 0, 1]
      //     }, {
      //       date: '01/29/17',
      //       time: '	E',
      //       winningNumber: [3, 5, 9, 5]
      //     }, {
      //       date: '01/04/17',
      //       time: '	E',
      //       winningNumber: [3, 6, 9, 8]
      //     }, {
      //       date: '12/10/16',
      //       time: '	E',
      //       winningNumber: [6, 6, 7, 9]
      //     }, {
      //       date: '02/23/17',
      //       time: '	M',
      //       winningNumber: [4, 5, 2, 1]
      //     }, {
      //       date: '01/29/17',
      //       time: '	M',
      //       winningNumber: [4, 5, 6, 4]
      //     }, {
      //       date: '01/04/17',
      //       time: '	M',
      //       winningNumber: [7, 5, 0, 7]
      //     }, {
      //       date: '12/10/16',
      //       time: '	M',
      //       winningNumber: [3, 4, 2, 3]
      //     }, {
      //       date: '02/22/17',
      //       time: '	E',
      //       winningNumber: [1, 0, 5, 5]
      //     }, {
      //       date: '01/28/17',
      //       time: '	E',
      //       winningNumber: [0, 9, 1, 4]
      //     }, {
      //       date: '01/03/17',
      //       time: '	E',
      //       winningNumber: [6, 5, 9, 3]
      //     }, {
      //       date: '12/09/16',
      //       time: '	E',
      //       winningNumber: [7, 8, 4, 8]
      //     }, {
      //       date: '02/22/17',
      //       time: '	M',
      //       winningNumber: [0, 9, 2, 5]
      //     }, {
      //       date: '01/28/17',
      //       time: '	M',
      //       winningNumber: [5, 4, 7, 4]
      //     }, {
      //       date: '01/03/17',
      //       time: '	M',
      //       winningNumber: [9, 3, 9, 8]
      //     }, {
      //       date: '12/09/16',
      //       time: '	M',
      //       winningNumber: [5, 4, 4, 4]
      //     }, {
      //       date: '02/21/17',
      //       time: '	E',
      //       winningNumber: [4, 4, 3, 2]
      //     }, {
      //       date: '01/27/17',
      //       time: '	E',
      //       winningNumber: [3, 1, 6, 5]
      //     }, {
      //       date: '01/02/17',
      //       time: '	E',
      //       winningNumber: [0, 0, 4, 8]
      //     }, {
      //       date: '12/08/16',
      //       time: '	E',
      //       winningNumber: [3, 2, 2, 1]
      //     }, {
      //       date: '02/21/17',
      //       time: '	M',
      //       winningNumber: [4, 0, 1, 0]
      //     }, {
      //       date: '01/27/17',
      //       time: '	M',
      //       winningNumber: [0, 7, 2, 5]
      //     }, {
      //       date: '01/02/17',
      //       time: '	M',
      //       winningNumber: [2, 2, 3, 1]
      //     }, {
      //       date: '12/08/16',
      //       time: '	M',
      //       winningNumber: [3, 3, 6, 4]
      //     }, {
      //       date: '02/20/17',
      //       time: '	E',
      //       winningNumber: [5, 0, 7, 2]
      //     }, {
      //       date: '01/26/17',
      //       time: '	E',
      //       winningNumber: [1, 1, 0, 6]
      //     }, {
      //       date: '01/01/17',
      //       time: '	E',
      //       winningNumber: [5, 2, 0, 5]
      //     }, {
      //       date: '12/07/16',
      //       time: '	E',
      //       winningNumber: [7, 7, 1, 8]
      //     }, {
      //       date: '02/20/17',
      //       time: '	M',
      //       winningNumber: [2, 1, 3, 9]
      //     }, {
      //       date: '01/26/17',
      //       time: '	M',
      //       winningNumber: [2, 9, 2, 2]
      //     }, {
      //       date: '01/01/17',
      //       time: '	M',
      //       winningNumber: [3, 7, 9, 5]
      //     }, {
      //       date: '12/07/16',
      //       time: '	M',
      //       winningNumber: [8, 9, 2, 8]
      //     }, {
      //       date: '02/19/17',
      //       time: '	E',
      //       winningNumber: [3, 8, 4, 2]
      //     }, {
      //       date: '01/25/17',
      //       time: '	E',
      //       winningNumber: [0, 0, 1, 1]
      //     }, {
      //       date: '12/31/16',
      //       time: '	E',
      //       winningNumber: [9, 3, 6, 3]
      //     }, {
      //       date: '12/06/16',
      //       time: '	E',
      //       winningNumber: [7, 2, 7, 3]
      //     }, {
      //       date: '02/19/17',
      //       time: '	M',
      //       winningNumber: [2, 8, 5, 0]
      //     }, {
      //       date: '01/25/17',
      //       time: '	M',
      //       winningNumber: [0, 7, 4, 5]
      //     }, {
      //       date: '12/31/16',
      //       time: '	M',
      //       winningNumber: [4, 9, 2, 8]
      //     }, {
      //       date: '12/06/16',
      //       time: '	M',
      //       winningNumber: [7, 5, 6, 1]
      //     }, {
      //       date: '02/18/17',
      //       time: '	E',
      //       winningNumber: [5, 2, 4, 5]
      //     }, {
      //       date: '01/24/17',
      //       time: '	E',
      //       winningNumber: [2, 1, 3, 8]
      //     }, {
      //       date: '12/30/16',
      //       time: '	E',
      //       winningNumber: [6, 4, 2, 0]
      //     }, {
      //       date: '12/05/16',
      //       time: '	E',
      //       winningNumber: [2, 8, 2, 5]
      //     }, {
      //       date: '02/18/17',
      //       time: '	M',
      //       winningNumber: [5, 4, 4, 6]
      //     }, {
      //       date: '01/24/17',
      //       time: '	M',
      //       winningNumber: [1, 9, 1, 0]
      //     }, {
      //       date: '12/30/16',
      //       time: '	M',
      //       winningNumber: [2, 7, 9, 2]
      //     }, {
      //       date: '12/05/16',
      //       time: '	M',
      //       winningNumber: [7, 1, 0, 7]
      //     }, {
      //       date: '02/17/17',
      //       time: '	E',
      //       winningNumber: [5, 3, 9, 2]
      //     }, {
      //       date: '01/23/17',
      //       time: '	E',
      //       winningNumber: [3, 7, 9, 7]
      //     }, {
      //       date: '12/29/16',
      //       time: '	E',
      //       winningNumber: [5, 8, 6, 8]
      //     }, {
      //       date: '12/04/16',
      //       time: '	E',
      //       winningNumber: [5, 1, 5, 6]
      //     }, {
      //       date: '02/17/17',
      //       time: '	M',
      //       winningNumber: [2, 9, 1, 3]
      //     }, {
      //       date: '01/23/17',
      //       time: '	M',
      //       winningNumber: [1, 8, 6, 5]
      //     }, {
      //       date: '12/29/16',
      //       time: '	M',
      //       winningNumber: [6, 5, 3, 9]
      //     }, {
      //       date: '12/04/16',
      //       time: '	M',
      //       winningNumber: [8, 9, 8, 0]
      //     }, {
      //       date: '02/16/17',
      //       time: '	E',
      //       winningNumber: [1, 1, 5, 7]
      //     }, {
      //       date: '01/22/17',
      //       time: '	E',
      //       winningNumber: [1, 0, 6, 3]
      //     }, {
      //       date: '12/28/16',
      //       time: '	E',
      //       winningNumber: [6, 8, 0, 2]
      //     }, {
      //       date: '12/03/16',
      //       time: '	E',
      //       winningNumber: [3, 1, 7, 4]
      //     }, {
      //       date: '02/16/17',
      //       time: '	M',
      //       winningNumber: [7, 6, 7, 8]
      //     }, {
      //       date: '01/22/17',
      //       time: '	M',
      //       winningNumber: [6, 6, 9, 6]
      //     }, {
      //       date: '12/28/16',
      //       time: '	M',
      //       winningNumber: [0, 3, 1, 1]
      //     }, {
      //       date: '12/03/16',
      //       time: '	M',
      //       winningNumber: [9, 5, 4, 3]
      //     }, {
      //       date: '02/15/17',
      //       time: '	E',
      //       winningNumber: [1, 7, 7, 9]
      //     }, {
      //       date: '01/21/17',
      //       time: '	E',
      //       winningNumber: [8, 4, 9, 4]
      //     }, {
      //       date: '12/27/16',
      //       time: '	E',
      //       winningNumber: [1, 6, 0, 2]
      //     }, {
      //       date: '12/02/16',
      //       time: '	E',
      //       winningNumber: [9, 7, 0, 1]
      //     }, {
      //       date: '02/15/17',
      //       time: '	M',
      //       winningNumber: [6, 7, 2, 8]
      //     }, {
      //       date: '01/21/17',
      //       time: '	M',
      //       winningNumber: [1, 7, 5, 8]
      //     }, {
      //       date: '12/27/16',
      //       time: '	M',
      //       winningNumber: [2, 9, 5, 6]
      //     }, {
      //       date: '12/02/16',
      //       time: '	M',
      //       winningNumber: [9, 8, 3, 3]
      //     }, {
      //       date: '02/14/17',
      //       time: '	E',
      //       winningNumber: [7, 4, 2, 8]
      //     }, {
      //       date: '01/20/17',
      //       time: '	E',
      //       winningNumber: [1, 4, 2, 3]
      //     }, {
      //       date: '12/26/16',
      //       time: '	E',
      //       winningNumber: [2, 0, 7, 6]
      //     }, {
      //       date: '12/01/16',
      //       time: '	E',
      //       winningNumber: [1, 9, 6, 9]
      //     }, {
      //       date: '02/14/17',
      //       time: '	M',
      //       winningNumber: [4, 0, 4, 6]
      //     }, {
      //       date: '01/20/17',
      //       time: '	M',
      //       winningNumber: [2, 6, 0, 2]
      //     }, {
      //       date: '12/26/16',
      //       time: '	M',
      //       winningNumber: [4, 3, 0, 9]
      //     }, {
      //       date: '12/01/16',
      //       time: '	M',
      //       winningNumber: [9, 3, 0, 0]
      //     }, {
      //       date: '02/13/17',
      //       time: '	E',
      //       winningNumber: [3, 4, 1, 4]
      //     }, {
      //       date: '01/19/17',
      //       time: '	E',
      //       winningNumber: [6, 3, 9, 6]
      //     }, {
      //       date: '12/25/16',
      //       time: '	E',
      //       winningNumber: [5, 2, 6, 2]
      //     }, {
      //       date: '11/30/16',
      //       time: '	E',
      //       winningNumber: [2, 8, 5, 4]
      //     }, {
      //       date: '02/13/17',
      //       time: '	M',
      //       winningNumber: [1, 9, 2, 5]
      //     }, {
      //       date: '01/19/17',
      //       time: '	M',
      //       winningNumber: [0, 7, 7, 3]
      //     }, {
      //       date: '12/25/16',
      //       time: '	M',
      //       winningNumber: [0, 2, 6, 1]
      //     }, {
      //       date: '11/30/16',
      //       time: '	M',
      //       winningNumber: [7, 1, 4, 3]
      //     }, {
      //       date: '02/12/17',
      //       time: '	E',
      //       winningNumber: [2, 1, 9, 8]
      //     }, {
      //       date: '01/18/17',
      //       time: '	E',
      //       winningNumber: [8, 7, 7, 2]
      //     }, {
      //       date: '12/24/16',
      //       time: '	E',
      //       winningNumber: [6, 2, 1, 4]
      //     }, {
      //       date: '11/29/16',
      //       time: '	E',
      //       winningNumber: [9, 5, 8, 0]
      //     }, {
      //       date: '02/12/17',
      //       time: '	M',
      //       winningNumber: [9, 1, 8, 2]
      //     }, {
      //       date: '01/18/17',
      //       time: '	M',
      //       winningNumber: [5, 9, 3, 2]
      //     }, {
      //       date: '12/24/16',
      //       time: '	M',
      //       winningNumber: [4, 2, 6, 8]
      //     }, {
      //       date: '11/29/16',
      //       time: '	M',
      //       winningNumber: [5, 4, 5, 2]
      //     }, {
      //       date: '02/11/17',
      //       time: '	E',
      //       winningNumber: [1, 8, 2, 3]
      //     }, {
      //       date: '01/17/17',
      //       time: '	E',
      //       winningNumber: [8, 2, 0, 4]
      //     }, {
      //       date: '12/23/16',
      //       time: '	E',
      //       winningNumber: [3, 9, 3, 5]
      //     }, {
      //       date: '11/28/16',
      //       time: '	E',
      //       winningNumber: [5, 7, 7, 4]
      //     }, {
      //       date: '02/11/17',
      //       time: '	M',
      //       winningNumber: [6, 1, 1, 6]
      //     }, {
      //       date: '01/17/17',
      //       time: '	M',
      //       winningNumber: [6, 0, 2, 0]
      //     }, {
      //       date: '12/23/16',
      //       time: '	M',
      //       winningNumber: [2, 0, 3, 0]
      //     }, {
      //       date: '11/28/16',
      //       time: '	M',
      //       winningNumber: [7, 6, 3, 8]
      //     }, {
      //       date: '02/10/17',
      //       time: '	E',
      //       winningNumber: [1, 3, 2, 5]
      //     }, {
      //       date: '01/16/17',
      //       time: '	E',
      //       winningNumber: [3, 5, 0, 1]
      //     }, {
      //       date: '12/22/16',
      //       time: '	E',
      //       winningNumber: [0, 7, 7, 6]
      //     }, {
      //       date: '11/27/16',
      //       time: '	E',
      //       winningNumber: [5, 4, 0, 2]
      //     }, {
      //       date: '02/10/17',
      //       time: '	M',
      //       winningNumber: [3, 5, 0, 1]
      //     }, {
      //       date: '01/16/17',
      //       time: '	M',
      //       winningNumber: [3, 8, 1, 8]
      //     }, {
      //       date: '12/22/16',
      //       time: '	M',
      //       winningNumber: [6, 6, 4, 3]
      //     }, {
      //       date: '11/27/16',
      //       time: '	M',
      //       winningNumber: [0, 7, 0, 0]
      //     }, {
      //       date: '02/09/17',
      //       time: '	E',
      //       winningNumber: [1, 4, 1, 1]
      //     }, {
      //       date: '01/15/17',
      //       time: '	E',
      //       winningNumber: [7, 5, 3, 3]
      //     }, {
      //       date: '12/21/16',
      //       time: '	E',
      //       winningNumber: [5, 5, 6, 3]
      //     }, {
      //       date: '11/26/16',
      //       time: '	E',
      //       winningNumber: [9, 7, 2, 5]
      //     }, {
      //       date: '02/09/17',
      //       time: '	M',
      //       winningNumber: [7, 3, 1, 9]
      //     }, {
      //       date: '01/15/17',
      //       time: '	M',
      //       winningNumber: [0, 2, 7, 5]
      //     }, {
      //       date: '12/21/16',
      //       time: '	M',
      //       winningNumber: [4, 4, 3, 1]
      //     }, {
      //       date: '11/26/16',
      //       time: '	M',
      //       winningNumber: [2, 6, 2, 5]
      //     }, {
      //       date: '02/08/17',
      //       time: '	E',
      //       winningNumber: [1, 2, 9, 8]
      //     }, {
      //       date: '01/14/17',
      //       time: '	E',
      //       winningNumber: [0, 5, 0, 7]
      //     }, {
      //       date: '12/20/16',
      //       time: '	E',
      //       winningNumber: [5, 1, 8, 8]
      //     }, {
      //       date: '11/25/16',
      //       time: '	E',
      //       winningNumber: [0, 5, 1, 2]
      //     }, {
      //       date: '02/08/17',
      //       time: '	M',
      //       winningNumber: [6, 0, 8, 8]
      //     }, {
      //       date: '01/14/17',
      //       time: '	M',
      //       winningNumber: [0, 9, 8, 6]
      //     }, {
      //       date: '12/20/16',
      //       time: '	M',
      //       winningNumber: [2, 5, 9, 3]
      //     }, {
      //       date: '11/25/16',
      //       time: '	M',
      //       winningNumber: [0, 5, 1, 7]
      //     }, {
      //       date: '02/07/17',
      //       time: '	E',
      //       winningNumber: [7, 9, 4, 3]
      //     }, {
      //       date: '01/13/17',
      //       time: '	E',
      //       winningNumber: [1, 5, 5, 6]
      //     }, {
      //       date: '12/19/16',
      //       time: '	E',
      //       winningNumber: [2, 0, 4, 4]
      //     }, {
      //       date: '11/24/16',
      //       time: '	E',
      //       winningNumber: [1, 4, 6, 8]
      //     }, {
      //       date: '02/07/17',
      //       time: '	M',
      //       winningNumber: [0, 9, 1, 3]
      //     }, {
      //       date: '01/13/17',
      //       time: '	M',
      //       winningNumber: [0, 9, 0, 0]
      //     }, {
      //       date: '12/19/16',
      //       time: '	M',
      //       winningNumber: [6, 4, 5, 2]
      //     }, {
      //       date: '11/24/16',
      //       time: '	M',
      //       winningNumber: [6, 3, 8, 6]
      //     }, {
      //       date: '02/06/17',
      //       time: '	E',
      //       winningNumber: [7, 2, 2, 9]
      //     }, {
      //       date: '01/12/17',
      //       time: '	E',
      //       winningNumber: [9, 1, 2, 7]
      //     }, {
      //       date: '12/18/16',
      //       time: '	E',
      //       winningNumber: [1, 9, 5, 6]
      //     }, {
      //       date: '11/23/16',
      //       time: '	E',
      //       winningNumber: [1, 5, 4, 4]
      //     }, {
      //       date: '02/06/17',
      //       time: '	M',
      //       winningNumber: [2, 3, 6, 8]
      //     }, {
      //       date: '01/12/17',
      //       time: '	M',
      //       winningNumber: [3, 0, 0, 9]
      //     }, {
      //       date: '12/18/16',
      //       time: '	M',
      //       winningNumber: [5, 5, 4, 6]
      //     }, {
      //       date: '11/23/16',
      //       time: '	M',
      //       winningNumber: [4, 5, 2, 3]
      //     }, {
      //       date: '02/05/17',
      //       time: '	E',
      //       winningNumber: [1, 9, 9, 2]
      //     }, {
      //       date: '01/11/17',
      //       time: '	E',
      //       winningNumber: [9, 9, 3, 6]
      //     }, {
      //       date: '12/17/16',
      //       time: '	E',
      //       winningNumber: [2, 4, 3, 0]
      //     }, {
      //       date: '11/22/16',
      //       time: '	E',
      //       winningNumber: [5, 1, 8, 6]
      //     }, {
      //       date: '02/05/17',
      //       time: '	M',
      //       winningNumber: [7, 1, 7, 6]
      //     }, {
      //       date: '01/11/17',
      //       time: '	M',
      //       winningNumber: [5, 1, 0, 8]
      //     }, {
      //       date: '12/17/16',
      //       time: '	M',
      //       winningNumber: [0, 7, 4, 6]
      //     }, {
      //       date: '11/22/16',
      //       time: '	M',
      //       winningNumber: [7, 0, 3, 2]
      //     }, {
      //       date: '02/04/17',
      //       time: '	E',
      //       winningNumber: [2, 4, 2, 2]
      //     }, {
      //       date: '01/10/17',
      //       time: '	E',
      //       winningNumber: [2, 8, 1, 7]
      //     }, {
      //       date: '12/16/16',
      //       time: '	E',
      //       winningNumber: [6, 4, 6, 4]
      //     }, {
      //       date: '11/21/16',
      //       time: '	E',
      //       winningNumber: [9, 2, 7, 1]
      //     }, {
      //       date: '02/04/17',
      //       time: '	M',
      //       winningNumber: [4, 5, 3, 2]
      //     }, {
      //       date: '01/10/17',
      //       time: '	M',
      //       winningNumber: [6, 5, 4, 3]
      //     }, {
      //       date: '12/16/16',
      //       time: '	M',
      //       winningNumber: [4, 2, 7, 3]
      //     }, {
      //       date: '11/21/16',
      //       time: '	M',
      //       winningNumber: [7, 0, 1, 1]
      //     }, {
      //       date: '02/03/17',
      //       time: '	E',
      //       winningNumber: [1, 5, 3, 6]
      //     }, {
      //       date: '01/09/17',
      //       time: '	E',
      //       winningNumber: [2, 7, 5, 4]
      //     }, {
      //       date: '12/15/16',
      //       time: '	E',
      //       winningNumber: [9, 1, 9, 5]
      //     }, {
      //       date: '11/20/16',
      //       time: '	E',
      //       winningNumber: [3, 7, 8, 5]
      //     }, {
      //       date: '02/03/17',
      //       time: '	M',
      //       winningNumber: [1, 8, 9, 4]
      //     }, {
      //       date: '01/09/17',
      //       time: '	M',
      //       winningNumber: [5, 0, 2, 3]
      //     }, {
      //       date: '12/15/16',
      //       time: '	M',
      //       winningNumber: [1, 0, 8, 1]
      //     }, {
      //       date: '11/20/16',
      //       time: '	M',
      //       winningNumber: [7, 1, 9, 5]
      //     }, {
      //       date: '02/02/17',
      //       time: '	E',
      //       winningNumber: [3, 4, 1, 3]
      //     }, {
      //       date: '01/08/17',
      //       time: '	E',
      //       winningNumber: [0, 2, 2, 0]
      //     }, {
      //       date: '12/14/16',
      //       time: '	E',
      //       winningNumber: [6, 3, 2, 6]
      //     }, {
      //       date: '11/19/16',
      //       time: '	E',
      //       winningNumber: [4, 8, 1, 9]
      //     }, {
      //       date: '02/02/17',
      //       time: '	M',
      //       winningNumber: [8, 3, 7, 5]
      //     }, {
      //       date: '01/08/17',
      //       time: '	M',
      //       winningNumber: [3, 9, 5, 2]
      //     }, {
      //       date: '12/14/16',
      //       time: '	M',
      //       winningNumber: [8, 7, 8, 1]
      //     }, {
      //       date: '11/19/16',
      //       time: '	M',
      //       winningNumber: [3, 0, 4, 8]
      //     }, {
      //       date: '02/01/17',
      //       time: '	E',
      //       winningNumber: [0, 7, 4, 7]
      //     }, {
      //       date: '01/07/17',
      //       time: '	E',
      //       winningNumber: [3, 9, 9, 2]
      //     }, {
      //       date: '12/13/16',
      //       time: '	E',
      //       winningNumber: [4, 8, 3, 0]
      //     }, {
      //       date: '11/18/16',
      //       time: '	E',
      //       winningNumber: [9, 8, 9, 8]
      //     }, {
      //       date: '02/01/17',
      //       time: '	M',
      //       winningNumber: [1, 2, 6, 6]
      //     }, {
      //       date: '01/07/17',
      //       time: '	M',
      //       winningNumber: [8, 3, 2, 1]
      //     }, {
      //       date: '12/13/16',
      //       time: '	M',
      //       winningNumber: [8, 5, 7, 2]
      //     }, {
      //       date: '11/18/16',
      //       time: '	M',
      //       winningNumber: [5, 1, 8, 5]
      //     }, {
      //       date: '01/31/17',
      //       time: '	E',
      //       winningNumber: [1, 3, 9, 7]
      //     }, {
      //       date: '01/06/17',
      //       time: '	E',
      //       winningNumber: [3, 4, 0, 4]
      //     }, {
      //       date: '12/12/16',
      //       time: '	E',
      //       winningNumber: [4, 7, 9, 8]
      //     }, {
      //       date: '11/17/16',
      //       time: '	E',
      //       winningNumber: [2, 8, 8, 2]
      //     }, {
      //       date: '01/31/17',
      //       time: '	M',
      //       winningNumber: [2, 2, 3, 4]
      //     }, {
      //       date: '01/06/17',
      //       time: '	M',
      //       winningNumber: [5, 4, 2, 4]
      //     }, {
      //       date: '12/12/16',
      //       time: '	M',
      //       winningNumber: [3, 1, 1, 1]
      //     }, {
      //       date: '11/17/16',
      //       time: '	M',
      //       winningNumber: [3, 8, 4, 5]
      //     }, {
      //       date: '01/30/17',
      //       time: '	E',
      //       winningNumber: [9, 9, 8, 6]
      //     }, {
      //       date: '01/05/17',
      //       time: '	E',
      //       winningNumber: [8, 1, 9, 3]
      //     }, {
      //       date: '12/11/16',
      //       time: '	E',
      //       winningNumber: [0, 9, 9, 2]
      //     }, {
      //       date: '11/16/16',
      //       time: '	E',
      //       winningNumber: [8, 4, 7, 1]
      //     }, {
      //       date: '01/30/17',
      //       time: '	M',
      //       winningNumber: [1, 1, 6, 4]
      //     }, {
      //       date: '01/05/17',
      //       time: '	M',
      //       winningNumber: [8, 4, 0, 2]
      //     }, {
      //       date: '12/11/16',
      //       time: '	M',
      //       winningNumber: [2, 4, 6, 2]
      //     }, {
      //       date: '11/16/16',
      //       time: '	M',
      //       winningNumber: [7, 6, 0, 8]
      //     }
      //   ]
      // }
    ];
    return {LOTTOGAMES};
  }
}
