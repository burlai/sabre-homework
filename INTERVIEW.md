# UI Developer Interview Exercise

You will be building a small React app to show client and sales data. The user will be able to interact with this data by filtering and browsing through it based on basic criteria.

Use the following design mock up as a reference for the app look and feel:
- [Design Mock Up](design-mockup.png)

### Requirements

#### React Patterns

- You must build this app with component re-usability in mind. Each functional component you build must be customizable by props with little to no hard-coded data or configurations beyond default values.
- You can use React Hooks or React Classes or both.

#### Functional 

1. Load the provided client data on the app's first load.
2. Display the client data in standard table.
    - Round sales figures to closest dollar amount
3. Add a filter to search by Company Name.
4. Add a filter to search by Minimum Sales amount.
5. Add a Loading Spinner/Indicator that is shown while the client data is being fetched.
6. Add a way to manually refresh the client data back from the API.
7. Add a Pagination feature to browse through the list.
8. Calculate and display total sales for all clients and current page.
9. Find clients with sales higher than $800.
    - From these clients, calculate the average sales figure.
    - Find what percentage of total clients these high performers represent.
10. Flag customers with the most monthly sales with an animated icon. Use an icon and animation pattern of your choice.

#### Visual 

Keep the page as close to the design as you can. Feel free to use custom CSS or a CSS toolkit.
