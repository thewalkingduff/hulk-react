
// Create a class for the element
export class Book extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const title = this.getAttribute('title');
        // const subtitle = this.getAttribute('subtitle');
        // const author = this.getAttribute('author');
        // const publisher = this.getAttribute('publisher');
        // const description = this.getAttribute('description');
        this.innerHTML = `
            <div class="card">
              <h5 class="card-header">${title}</h5>
              <div class="card-body">
                    <p class="card-text">
                    <table class="table">
                        <tr>
                            <td class="text-success font-weight-bold">Title:</td>
                            <td>${title}</td>
                    </table>
                    </p>
              </div>
            </div>
        `;
    }
}

// Define the new element
customElements.define('mit-book', Book);

export default Book