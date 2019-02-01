import { Component } from '@angular/core';
import { AgentService } from '../Service/agent.service';
import { HAMMER_LOADER } from '@angular/platform-browser';
import {ListService} from './lists.service';

@Component({
  selector: 'list',
  templateUrl: './List.component.html'
})
export class ListComponent {
     
  public merp 

  constructor(private listservice:ListService ) { 
    
  }

  

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let derp = this.listservice.grito();
    this.merp = derp[1];
    console.log(derp);
  }
}


