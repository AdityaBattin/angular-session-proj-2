import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { Component } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  deleteid : number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', deleteid: 1},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', deleteid: 2},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', deleteid: 3},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', deleteid: 4},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', deleteid: 5},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', deleteid: 6},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', deleteid: 7},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', deleteid: 8},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', deleteid: 9},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', deleteid: 10},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-session-proj-2';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol' , 'delete'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) {}
  openDialog(id: number){
    let dialogRef = this.dialog.open(DialogDeleteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`element id is = ${id}`)
      if(result === "true"){
        console.log(`${ELEMENT_DATA[id-1]}`)
        ELEMENT_DATA.splice( id-1, 1 )
        console.log("Element Deleted")
      }
    })
  }
}
