class SelectionHandler {
  constructor() {
    this.selectedText = null;
    this.onTextSelected = null;
  }

  // Initialize the selection handler
  init(onTextSelectedCallback) {
    this.onTextSelected = onTextSelectedCallback;
    document.addEventListener('mouseup', this.handleSelection.bind(this));
  }

  // Handle text selection event
  handleSelection() {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();

    if (selectedText) {
      this.selectedText = selectedText;

      // Show a tooltip or button to ask AI about selected text
      this.showSelectionTooltip(selection);
    } else {
      this.selectedText = null;
      this.hideSelectionTooltip();
    }
  }

  // Show tooltip when text is selected
  showSelectionTooltip(selection) {
    // Remove any existing tooltip
    this.hideSelectionTooltip();

    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.id = 'ai-selection-tooltip';
    tooltip.innerHTML = 'Ask AI about this';
    tooltip.style.cssText = `
      position: fixed;
      background-color: #25c2a0;
      color: white;
      padding: 8px 12px;
      border-radius: 4px;
      font-size: 14px;
      cursor: pointer;
      z-index: 10000;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      user-select: none;
    `;

    // Position the tooltip near the selection
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = (rect.top - 40) + 'px';

    // Add click handler to send selected text to AI
    tooltip.addEventListener('click', () => {
      if (this.onTextSelected && this.selectedText) {
        this.onTextSelected(this.selectedText);
      }
      this.hideSelectionTooltip();
    });

    document.body.appendChild(tooltip);
  }

  // Hide the selection tooltip
  hideSelectionTooltip() {
    const existingTooltip = document.getElementById('ai-selection-tooltip');
    if (existingTooltip) {
      existingTooltip.remove();
    }
  }

  // Get the currently selected text
  getSelectedText() {
    return this.selectedText;
  }

  // Clear the selected text
  clearSelection() {
    this.selectedText = null;
    this.hideSelectionTooltip();
  }
}

export default SelectionHandler;