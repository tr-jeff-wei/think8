class QItem_if_sent_digit {
       constructor() {
              this.description = [];
              this.answer_fun = [];
              this.answer_para = [];

              for( var i=0 ; i<10 ;i++){
                  this.qs01();
              }

       }

       // == (number)
       qs01() {
              var index = this.description.length;

              let k = this.ran(0,10);
              let result = this.ran(0,5);
              let result_idx = result+k ;

              let target_number = this.ran(0,20) ;

              let target = '符合標準' ;
              let ans = [
                'test  ==  '+target_number ,
                'test  !=  ' +target_number ,
                'test  >  '  +target_number ,
                'test  <  '  +target_number ,
                'test  >=  ' +target_number ,
                'test  <=  '+target_number
              ] ;
              let ans2 = [
                'test 等於 '+target_number ,
                'test 不等於 '+target_number ,
                'test 超過 '+target_number ,
                'test 比 '+target_number +' 少',
                'test 大於等於 '+target_number ,
                'test 小於等於 '+target_number
              ] ;


              this.description[index] = [
                     '    var test = ❓ ;',
                     '    if (    🤔    ){',
                     '        // '+target ,
                     '    }',
                     '------------------------------------------------\n'+
                     '  🤔：  如果『'+ans2[result]+' 嗎？』\n'+
                     '------------------------------------------------\n'+
                     this.get_letter(k++)+ans[0]+'\n\n'+
                     this.get_letter(k++)+ans[1]+'\n\n'+
                     this.get_letter(k++)+ans[2]+'\n\n'+
                     this.get_letter(k++)+ans[3]+'\n\n'+
                     this.get_letter(k++)+ans[4]+'\n\n'+
                     this.get_letter(k++)+ans[5]+'\n\n'+
                     '------------------------------------------------\n'+
                     '  請把答案放入 var a = ?'
              ];

              let aa = this.get_letter(result_idx) ;
              this.answer_fun[index] =
                     function(para) {
                            if (typeof a === 'undefined') return false;
                            if (a.trim()  !== para[0].trim()) return false;
                            return true;
                     };

              this.answer_para[index] = [aa];
              //////////////////////////////////////////////////////////////////////

       }


       qs02() {
              var index = this.description.length;

              let k = this.ran(0,10);
              let result = this.ran(0,1);
              let result_idx = result+k ;

              let info = ['倒垃圾','擦黑板' , '掃地'] ;
              let info_idx = k%info.length ;
              let ans = [
                "p  ==  '值日生'" ,
                "p  !=  '值日生'" ,
              ] ;
              let ans2 = [
                'p 是 值日生 要\n                    '+info[info_idx] ,
                'p 不是 值日生 要幫忙\n                    ' +info[info_idx]
              ] ;


              this.description[index] = [
                     '    var p = ❓ ;',
                     '    if (    🤔    ){',
                     '        // '+info[info_idx] ,
                     '    }',
                     '------------------------------------------------\n'+
                     ' 🤔：  如果『'+ans2[result]+' 嗎？』\n'+
                     '------------------------------------------------\n'+
                     this.get_letter(k++)+ans[0]+'\n\n'+
                     this.get_letter(k++)+ans[1]+'\n\n'+
                     '------------------------------------------------\n'+
                     '  請把答案放入 var a = ?'
              ];

              let aa = this.get_letter(result_idx) ;
              this.answer_fun[index] =
                     function(para) {
                            if (typeof a === 'undefined') return false;
                            if (a.trim()  !== para[0].trim()) return false;
                            return true;
                     };

              this.answer_para[index] = [aa];
              //////////////////////////////////////////////////////////////////////

       }


       ran(start, end) {
              var diff = end - start;
              return Math.floor(Math.random() * (diff + 1)) + start;
       }

       ran_array(arr_in) {
              var result = [];
              while (arr_in.length > 0) {
                     let r = this.ran(0, arr_in.length - 1);
                     let a = arr_in.splice(r, 1);
                     result.push(a[0]);
              }
              return result;
       }

       get_letter( li ){
         let sym = ['🌞' ,  '🚗' , '☘️', '🌈' , '🌜' ,'🚢'] ;
         li = li%sym.length ;
         //return '      '+String.fromCharCode( 'A'.charCodeAt(0)+li )+' : ' ;
         return '      '+sym[li]+' ' ;
       }
}
