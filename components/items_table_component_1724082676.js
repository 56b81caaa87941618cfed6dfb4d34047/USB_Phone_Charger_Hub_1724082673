/* Summary: Contains a section with:
- A title for the table
- A table with 6 rows and 2 columns. The first column of each row contains the item name on top and description under it. The second column of each row contains the item's price.
- If the user hovers over a price, it shows a blue button on the row labelled "Details"
*/

Vue.component("items_table_component_1724082676", {
    template: `
    <section id="items-table-component" class="py-8 bg-white">
        <h2 id="costs-title" class="text-lg font-semibold mb-5">PLACEHOLDER_ITEMS_TABLE_TITLE</h2>
        <div id="costs-table-container" class="overflow-x-auto">
            <table id="costs-table" class="table-auto w-full text-sm">
                <thead id="costs-table-header" class="sr-only" id="costs-table-header">
                    <tr>
                        <th id="description-header">Description</th>
                        <th id="cost-header" scope="col">Cost</th>
                    </tr>
                </thead>
                <tbody id="costs-table-body">
                    <tr class="group odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900" id="costs-row-1" >
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg after:w-px after:h-8 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 group-hover:after:opacity-0 after:transition-opacity after:bg-slate-200 dark:after:bg-slate-800" id="costs-cell-description-1">
                            <div class="font-semibold mb-0.5" id="costs-link-1">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" >
                                    PLACEHOLDER_ITEM_1
                                </a>
                            </div>
                            <p class="after:bg-slate-200 dark:after:bg-slate-800" id="costs-description-1">PLACEHOLDER_ITEM_DESCRIPTION_1</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50% after:text-blue-500" id="costs-cell-cost-1">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">PLACEHOLDER_ITEM_PRICE_1</a>
                        </td>
                    </tr>
                    <tr class="group odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900" id="costs-row-1" >
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg after:w-px after:h-8 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 group-hover:after:opacity-0 after:transition-opacity after:bg-slate-200 dark:after:bg-slate-800" id="costs-cell-description-1">
                            <div class="font-semibold mb-0.5" id="costs-link-1">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" >
                                    PLACEHOLDER_ITEM_2
                                </a>
                            </div>
                            <p class="after:bg-slate-200 dark:after:bg-slate-800" id="costs-description-1">PLACEHOLDER_ITEM_DESCRIPTION_2</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50% after:text-blue-500" id="costs-cell-cost-1">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">PLACEHOLDER_ITEM_PRICE_2</a>
                        </td>
                    </tr>
                    <tr class="group odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900" id="costs-row-3">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg" id="costs-cell-description-3">
                            <div class="font-semibold mb-0.5"  id="costs-link-3">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html">PLACEHOLDER_ITEM_3</a>
                            </div>
                            <p class="after:bg-slate-200 dark:after:bg-slate-800"  id="costs-description-3">PLACEHOLDER_ITEM_DESCRIPTION_3</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50% after:text-blue-500" id="costs-cell-cost-3">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">PLACEHOLDER_ITEM_PRICE_3</a>
                        </td>
                    </tr>
                    <tr class="group odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900" id="costs-row-4">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg" id="costs-cell-description-4">
                            <div class="font-semibold mb-0.5"  id="costs-link-4">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html">PLACEHOLDER_ITEM_4</a>
                            </div>
                            <p class="after:bg-slate-200 dark:after:bg-slate-800"  id="costs-description-4">PLACEHOLDER_ITEM_DESCRIPTION_4</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50% after:text-blue-500" id="costs-cell-cost-4">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">PLACEHOLDER_ITEM_PRICE_4</a>
                        </td>
                    </tr>
                    <tr class="group odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900" id="costs-row-5">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg" id="costs-cell-description-5">
                            <div class="font-semibold mb-0.5"  id="costs-link-5">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html">PLACEHOLDER_ITEM_5</a>
                            </div>
                            <p class="after:bg-slate-200 dark:after:bg-slate-800"  id="costs-description-5">PLACEHOLDER_ITEM_DESCRIPTION_5</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50%" id="costs-cell-cost-5 after:text-blue-500">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">PLACEHOLDER_ITEM_PRICE_5</a>
                        </td>
                    </tr>
                    <tr class="group odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900" id="costs-row-6">
                        <th scope="row" class="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg" id="costs-cell-description-6">
                            <div class="font-semibold mb-0.5"  id="costs-link-6">
                                <a class="before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html">PLACEHOLDER_ITEM_6</a>
                            </div>
                            <p class="after:bg-slate-200 dark:after:bg-slate-800"  id="costs-description-6">PLACEHOLDER_ITEM_DESCRIPTION_6</p>
                        </th>
                        <td class="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:rounded-lg after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition after:bg-gradient-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 group-odd:dark:after:from-slate-900 after:to-50%" id="costs-cell-cost-6 after:text-blue-500">
                            <a class="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="details.html" tabindex="-1">PLACEHOLDER_ITEM_PRICE_6</a>
                        </td>
                    </tr>
                </tbody>
                <tfoot id="costs-table-footer">
                    <tr>
                        <th id="total-description" scope="row" class="relative text-left font-normal px-4 py-5">
                            <p id="total-description-text" class="italic text-slate-500">TOT in USD dollar</p>
                        </th>
                        <td id="total-cost" class="relative font-semibold text-right text-base underline px-4 py-5 w-[1%] text-emerald-500"> PLACEHOLDER_ITEMS_TOTAL_PRICE</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </section>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
