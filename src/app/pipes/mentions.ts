import { Pipe, PipeTransform } from '@angular/core';

/**
 * Converts a array of mentions into a string 
 * to show in input box of reply
 * 
 * @param { Array<any> } mentions
 * E.g : [{sceen_name: 'coderaga'}, {screen_name: '_voidzero'}]
 * 
 * @return A String with all mentions in it if any
 * E.g : "@coderaga @_voidzero"
 */
@Pipe({name: 'mentions'})
export class MentionsPipe implements PipeTransform {
  transform(mentions: Array<any>, ownerScreenName: string){
    
    var text = "";
    var newMentions = this.getAllMentionsArray(mentions, ownerScreenName)

    newMentions.forEach(el => {
      text = text + "@" + el.screen_name + " ";
    })
    return text;
  }

  private getAllMentionsArray(mentions, ownerScreenName){
    var ownerScreenNameObj = { screen_name: ownerScreenName };
    if(mentions){
      mentions.push(ownerScreenNameObj);
      return mentions;
    }
    else{
    var newMentions = [];
      newMentions.push(ownerScreenNameObj);
      return newMentions;
    }
  }
}