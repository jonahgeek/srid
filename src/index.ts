// SHARED ROOT IDENTIFIER (SRID) Library (TypeScript)

// Utility: Generate a random 6-char alphanumeric string
function generateHashChunk(length: number = 6): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Utility: Format date as YYMMDD
function getCurrentDateYYMMDD(): string {
  const now = new Date();
  const yy = String(now.getFullYear()).slice(-2);
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  return `${yy}${mm}${dd}`;
}

class SRID {
  private countryCode: string;
  private sharedId: string;
  private transactionCount: number;

  constructor(countryCode: string) {
    this.countryCode = countryCode.toUpperCase();
    this.sharedId = `${this.countryCode}${getCurrentDateYYMMDD()}-${generateHashChunk()}`;
    this.transactionCount = 0;
  }

  public getSharedId(): string {
    return this.sharedId;
  }

  public generateUserId(): string {
    return `USR-${this.sharedId}`;
  }

  public generateWalletId(): string {
    return `WLT-${this.sharedId}`;
  }

  public generateTransactionId(): string {
    this.transactionCount++;
    const txnSuffix = String(this.transactionCount).padStart(3, '0');
    return `TXN-${this.sharedId}-${txnSuffix}`;
  }
}

export default SRID;

/*
Usage Example:

import SRID from './srid';
const srid = new SRID('KE');

console.log(srid.getSharedId()); // e.g., KE250326-A7K2Z9
console.log(srid.generateUserId()); // e.g., USR-KE250326-A7K2Z9
console.log(srid.generateWalletId()); // e.g., WLT-KE250326-A7K2Z9
console.log(srid.generateTransactionId()); // e.g., TXN-KE250326-A7K2Z9-001
console.log(srid.generateTransactionId()); // e.g., TXN-KE250326-A7K2Z9-002
*/
