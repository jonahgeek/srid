
import SRID from "../";

describe("SRID", () => {
  let generator: SRID;

  beforeEach(() => {
    generator = new SRID("KE");
  });

  test("generates a shared ID with correct format", () => {
    const sharedId = generator.getSharedId();
    expect(sharedId).toMatch(/^KE\d{6}-[A-Z0-9]{6}$/);
  });

  test("generates user ID based on shared ID", () => {
    const userId = generator.generateUserId();
    expect(userId).toMatch(/^USR-KE\d{6}-[A-Z0-9]{6}$/);
    expect(userId).toContain(generator.getSharedId());
  });

  test("generates wallet ID based on shared ID", () => {
    const walletId = generator.generateWalletId();
    expect(walletId).toMatch(/^WLT-KE\d{6}-[A-Z0-9]{6}$/);
    expect(walletId).toContain(generator.getSharedId());
  });

  test("generates transaction IDs with sequential suffixes", () => {
    const txn1 = generator.generateTransactionId();
    const txn2 = generator.generateTransactionId();
    expect(txn1).toMatch(/^TXN-KE\d{6}-[A-Z0-9]{6}-001$/);
    expect(txn2).toMatch(/^TXN-KE\d{6}-[A-Z0-9]{6}-002$/);
  });
});
