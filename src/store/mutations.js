export function ADD_RECEIPT (state, photo) {
    d = new Date().toLocaleString()
    receipts = state.receipts
    receipts.push({"date":d,"photo":photo})
    state.receipts = receipts
  }