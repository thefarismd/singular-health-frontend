## Prerequisites
    
- **Node.js v23.10.0**; it should work with **Node.js v18 or later** (LTS recommended)
- Make sure you have **npm** (comes with Node) installed

## Development Setup

1. Navigate to the `singular-health-frontend/` folder:

2. Install all dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

4. Open your browser and navigate to:
    ```
    http://localhost:5173/
    ```
---

## Notes

- Ensure the backend server (`singular-health-backend`) is running and accessible at `http://localhost:5266` before testing the application.
- 
## Assumptions & Trade-offs

- Patient scan is hardcoded — the app only supports a single patient's scan records.
- To add more scan, please add manually in the backend.

## Estimated Time Spent

- 2.5 Hours