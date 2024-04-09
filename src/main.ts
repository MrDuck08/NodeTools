import { QMainWindow, QWidget, QLabel, QPushButton, QIcon, QBoxLayout, Direction } from '@nodegui/nodegui';
import { writeFile } from 'node:fs';
import * as path from "node:path";
import sourceMapSupport from 'source-map-support';

sourceMapSupport.install();


function main(): void {
  const win = new QMainWindow();
  win.setWindowTitle("Bdoy");

  const centralWidget = new QWidget();

  const rootLayout = new QBoxLayout(Direction.TopToBottom);
  centralWidget.setObjectName("myroot");
  centralWidget.setLayout(rootLayout);

  const label = new QLabel();
  label.setObjectName("Number");
  label.setText("0");

  const button1 = new QPushButton();
  button1.setText("+1")

  button1.addEventListener('clicked',() => {blobblobPlus()})


  const button2 = new QPushButton();
  button2.setText('-1');
  button2.addEventListener('clicked', () => { blobBlobMinus() });

  function blobblobPlus() 
  {

    currentNumber++;
    label.setText(currentNumber);

  }

  function blobBlobMinus()
  {

    if(currentNumber < 1) 
    { 
      return;
    }

    currentNumber--;
    label.setText(currentNumber);

  }

  const saveButton = new QPushButton();
  saveButton.setText('Save!');
  saveButton.addEventListener('clicked', () => { SaveLevel() });
  rootLayout.addWidget(saveButton);

  let currentNumber = 0;
  const numberLabel = new QLabel();

  function SaveLevel() {

    var fileSystemObject = require('fs');
    
    var fileToWriteTo = fileSystemObject.createWriteStream("C:/Users/alexander.nilsson4/Documents/Unity/Node/GUIText.txt")
    

    fileToWriteTo.write(currentNumber.toString());



    fileToWriteTo.End();
  }


  rootLayout.addWidget(label);
  rootLayout.addWidget(button1);
  rootLayout.addWidget(button2);
  win.setCentralWidget(centralWidget);
  win.setStyleSheet(
  `
    #myroot {
      background-color: #009688;
      height: '100%';
      align-items: 'center';
      justify-content: 'center';
    }
    #mylabel {
      font-size: 16px;
      font-weight: bold;
      padding: 1;
    }
  `
  );
  win.show();

  (global as any).win = win;
}
main();
