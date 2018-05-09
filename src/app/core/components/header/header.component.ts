import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() { }

  // openAddContactDialog(): void {
  //   let dialogRef = this.dialog.open(NewContactDialogComponent, {
  //     width: '450px'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed', result);

  //     if (result) {
  //       this.openSnackBar("Contact added", "Navigate")
  //         .onAction().subscribe(() => {
  //           this.router.navigate(['/contactmanager', result.id]);
  //         });
  //     }
  //   });
  // }

  // openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
  //   return this.snackBar.open(message, action, {
  //     duration: 5000,
  //   });
  // }
}