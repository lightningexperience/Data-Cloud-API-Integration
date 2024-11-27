import { LightningElement, wire } from 'lwc';
import createCasesb from '@salesforce/apex/SalesforceConnect.createCasesb';

export default class LastNameList extends LightningElement {
    lastNames = []; // Store the list of last names
    error;          // Store error messages, if any

    // Wire the Apex method to the LWC
    @wire(createCasesb)
    wiredLastNames({ error, data }) {
        if (data) {
            this.lastNames = data;  // If data is returned, store it in lastNames
            this.error = undefined; // Clear any previous errors
        } else if (error) {
            this.error = error;    // Store the error if it occurs
            this.lastNames = [];   // Reset the lastNames
        }
    }
}
