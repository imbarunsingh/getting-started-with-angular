import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'filter-textbox',
    templateUrl: './filter-textbox.component.html'  
})
export class FilterTextboxComponent implements OnInit {
    
    private _filter: string;
    @Output() changed: EventEmitter<string> = new EventEmitter<string>();

    get filter() {
        return this._filter;
    }
    
    @Input()
    set filter(val: string) { 
        this._filter = val;
        this.changed.emit(this.filter); //Raise changed event
    }
    
    constructor() {}
    
    ngOnInit() {
        
    }
}