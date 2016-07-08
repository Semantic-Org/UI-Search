### Version 2.2.2 - July 07, 2016

- **Dropdown** - Fixed "pointer" cursor appearing in hitbox above search input in `search selection`, now all input area will appear with "text" input cursor

### Version 2.2.0 - June 26, 2016

- **Dropdown** - Dropdown will now automatically focus on `search` inside of a dropdown menu after it is opened.
- **Dropdown** - Multiple select dropdown now sizes current dropdown input based on rendered width of a hidden element, not using an estimate based on character count. This means search will never break to a second line earlier than would normally fit in current line.
- **Dropdown** - Added `fullSearchSearch: 'exact'` setting, which requires exact matches for dropdown values [#3085](https://github.com/Semantic-Org/Semantic-UI/issues/3085) [#3994](https://github.com/Semantic-Org/Semantic-UI/issues/3994) **Thanks @ShawnCholeva**
- **Dropdown** - Added new setting for search selection `hideAdditions` this will remove showing user additions inside the menu, making for a more intuitive adding process. Dropdowns now have a new state `empty` which will format an active dropdown with empty results. [#3791](https://github.com/Semantic-Org/Semantic-UI/issues/3791)
- **Search** - Added a new option `selectFirstResult`, which defaults to `false`. Will automatically highlight first result on search
- **Search** - Search now includes a `showNoResults` setting for determining whether no results messages should be shown
- **Dropdown** - `search selection` would not let you move back in an entered search string with left arrow [#3596](https://github.com/Semantic-Org/Semantic-UI/issues/3596) **Thanks @Sanjo**
- **Form Validation / Dropdown** - Using "enter" key in a `search dropdown` could cause a form to be submitted [#3676](https://github.com/Semantic-Org/Semantic-UI/issues/3676)
- **Search** - Fixed bug where a previously XHR query could cause the next one to fail depending on the latency of the request [#2779](https://github.com/Semantic-Org/Semantic-UI/issues/2779)
- **Search** - Fixed an issue where `onResult` returning `false` would not prevent the search menu from hiding. Clicking on an empty results message will also no longer close the search results. [#3856](https://github.com/Semantic-Org/Semantic-UI/issues/3856) [#3870](https://github.com/Semantic-Org/Semantic-UI/issues/3870)
- **Dropdown** - Dropdown would open when an label delete x was clicked when not using `search selection` [#3789](https://github.com/Semantic-Org/Semantic-UI/issues/3789)
- **Dropdown** - Search selection would lose search input focus when clicking on a choice [#3790](https://github.com/Semantic-Org/Semantic-UI/issues/3790)
- **Search** - Added `refresh` behavior for search to refresh selector cache. Cache will automatically refresh after API results received
- **Search** - Fixed issue where `href` was not pulling correctly on search click when the `result` was an `a` itself. [#3409](https://github.com/Semantic-Org/Semantic-UI/issues/3409)

### Version 2.1.7 - Dec 19, 2015

- **Search** - Search now correctly hides menu when an error message inside results is clicked. [#3039](https://github.com/Semantic-Org/Semantic-UI/issues/3039)

### Version 2.1.6 - Nov 6, 2015

- **Checkbox/Dropdown/Search** - Fixed issue where dropdown/checkbox `change` events were not bubbling. (Dispatched events were swapped to use native `document.creatEvent` in `2.1.5` unfortunately the flag to bubble events was mistakenly off.)

### Version 2.1.5 - Nov 1, 2015

- **Checkbox/Dropdown/Search** - Fixed issue where using `.trigger('change')` would not fire native `change` event. Only triggering event handlers attached with jQuery [#3108](https://github.com/Semantic-Org/Semantic-UI/issues/3108)
- **Dropdown** - Search dropdowns will now correctly filter by current search term on re-focus
- **Dropdown** - `search dropdown` will now initialize with `autocomplete="off"` to avoid triggering native autocomplete menu
- **Search** - Fixes `onSearchQuery` not firing when results are cached **Thanks @mnquintana**
- **Search** - Fixes `url` parameter not working correctly due to typo in source **Thanks @fabienb4**

#### Features

- **Dropdown**  - Dropdown using remote data, can now customize the property names returned by api call using `fields` (similar to search).
- **Search** - Search now can use any server response mapping, use the `fields` parameter to pass in a mapping of server response to content **thanks @anibalmf1** [#2645](https://github.com/Semantic-Org/Semantic-UI/issues/2645)

#### Bugs

- **Dropdown** - `forceSelection` no longer sets current value in search selection when current query is blank [#2058](https://github.com/Semantic-Org/Semantic-UI/issues/2058)
- **Dropdown** - Fixed issue where "no results" message would be still be visible before search query on input focus [#2824](https://github.com/Semantic-Org/Semantic-UI/issues/2824)
- **Dropdown** - Fixed issue where selected item would not be shown when being re-shown after filtering with single search selection [#2824](https://github.com/Semantic-Org/Semantic-UI/issues/2824)
- **Search** - Calling `.search('show results')` no longer fails when input is not focused [#2842](https://github.com/Semantic-Org/Semantic-UI/issues/2842)

### Version 2.0.5 - July 20, 2015

- **Dropdown** - Fixed issue causing `multiple search dropdown` using [`search` inside menu](http://www.semantic-ui.com/modules/dropdown.html#search-in-menu) to break when multiple [#2666](https://github.com/Semantic-Org/Semantic-UI/issues/2666)

### Version 2.0.4 - July 17, 2015

- **Dropdown** - Fixed `search selection` appearing incorrectly inside menu (default text would not disappear) [#2624](https://github.com/Semantic-Org/Semantic-UI/issues/2624)

### Version 2.0.2 - July 7, 2015

- **Dropdown** - Fixed regression in `2.0.1` causing search dropdown not to clear values correctly [#2533](https://github.com/Semantic-Org/Semantic-UI/issues/2533)

### Version 2.0.0 - June 30, 2015

- **Dropdown** - Added remote API integration with dropdown, to allow `search selection` to query against a remote dataset.
- **Dropdowns** - Added ability to add custom choices to all search selection dropdowns (multi/single) using `allowAdditions: true` setting. Search now displays error messages on no results in all cases.
- **Dropdown** - `fullTextSearch: true` now uses fuzzy search (same as `ui search`)
- **Search** - Cache can now be cleared using `$('.search').search('clear cache')`
- **Search** - Search now operates off a unique id generated by result position to retrieve results. For example category #1's first result is 'A1' . Previously result titles were used as their "id", which could cause issues with duplicate titles, or results that do not contain a title.
- **Search** - Search will now automatically add class `category` when using `type: category`.
- **Search** - Search will now generate `results` container if one is not present on init
- **Search** - Search now uses `em` for resizes, making sure it will resize with the surrounding content
- **Search** - Search `prompt` now has focus styles defined if not using `ui input`
- **Dropdown** - Fix issue with search dropdown refocusing on self the first time after "tabbing" away in Chrome
- **Dropdown** - Fixed issue with `search selection` not changing text when reselecting same value from list
- **Dropdown** - Fixed `search dropdown` submitting parent form when enter shortcut pressed
- **Search** - Search will no longer incorrectly produce an error when API settings are passed through metadata
- **Search** - Fixed `category search` not applying active styles correctly to category names
- **Search** - Fixed `onSelect` not returning the correct value when using `type: category`
- **Search** - Fixed `onSelect` returning the first term that matches the beginning of the selected value not the exact value.
- **Search** - Fix `loading search` with an `icon button` causing double loaders.
- **Search** - `searchFields` setting now correctly replaces default fields instead of adding the user fields to defaults
- **Search** - Calls to `set value` or `query` now obey `minCharacterLength`
- **Search** - Search API calls now use the same level debug settings as search
- **Search** - Slightly adjusted search result theme for clarity

### Version 1.11.5 - March 23, 2015

- **Dropdown** - Fix bug where element will not blur on tab key when search selection and no selection made

### Version 1.11.2 - March 6, 2015

- **Search** - Search now uses internally [fuzzy search](https://github.com/bevacqua/fuzzysearch) as its new full text search algorithm.

### Version 1.11.0 - March 3, 2015

- **Dropdown** - Fixes issue where dropdown would not open after restoring previous value on failed `search dropdown` search
- **Dropdown** - Fixes issue where dropdown would not open after restoring previous value on failed `search dropdown` search
- **Search** - Fix special characters not searching correctly with local search
- **Search** - Fix a bug with `onSelect` returning `null` when `minCharacters: 0`
- **Search** - Fix a bug with `onSelect returning `null` when results retrieved from cached API query
- **Form** - Added `input[type="search"]` styles to `ui form`

### Version 1.10.3 - February 27, 2015

- **Search** - Fixes bug in category search causing item selection to sometimes produce a javascript error.

### Version 1.10.0 - February 23, 2015

- **Search** - Category search no longer displays unnecessary error message about maxResults

### UI Changes

- **Dropdown** - `search selection dropdown` will now close the menu when a `dropdown icon` is clicked
- **Dropdown** - Added new dropdown setting, `forceSelection` which forces `search selection` to a selected value on blur. Defaults to `true`.

### Version 1.8.0 - January 23, 2015

- **Search** - Search `onSelect` now receives JSON object matching currently selected element, you can now programmatically retrieve result JSON using `.search('get result', 'query')` or `.search('get results')`. `get result` will default to current value unless specified as first parameter.
- **Search** - Greatly reduced search delay from `300ms` to `100ms`. Previous request will automatically abort `xhr` when new request made
- **Search** - Search `onSelect` and `onResultsAdd` can now cancel default actions by returning `false`.
- **Dropdown** - Dropdown no longer will not show menu when no `item` are present in menu. Dropdown will now only filter results for `ui search dropdown` #1632 **Thanks PSyton**.
- **Search** - Search results no longer hide/show when user changes tab or page loses focus

### Version 1.7.0 - January 14, 2015

- **Dropdown** - Search dropdown input can now have backgrounds. Fixes issues with autocompleted search dropdowns which have forced yellow "autocompleted" bg.
- **Dropdown** - Fix issue with search selection not correctly matching when values are not strings
- **Dropdown** - Fixes dropdown search input from filtering text values when input is inside menu, i.e "In-Menu Search"
- **Dropdown** - Fix issue with search selection not correctly creating RegExp when select values are not strings **Thanks @alufers**

### Version 1.6.0 - January 05, 2015

- **Form** - ``ui search dropdown`` inside a form has incorrect focus style

### Version 1.5.1 - January 01, 2015

- **Search** - Fixed issue with local search returning all results due to improper regexp

### Version 1.5.0 - December 30, 2014

- **Dropdown/Search** - Fixed issues with ``ui search`` and ``ui search dropdown`` using ``RegExp test`` which [advances pointer on match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) causing results to display incorrectly

### Version 1.3.0 - December 17, 2014

- **Dropdown** - Full text search now defaults to ``false``, meaning search terms will return only results beginning with letters
- **Dropdown** - Search Dropdown is now much more responsive, js improvements and input throttling added.Throttling defaults to `50ms` and can be modified with settings ``delay.search``
- **Dropdown** - Search Dropdown now correctly replaces placeholder text when backspacing to empty value
- **Dropdown** - Search Dropdown now has a callback when all results filtered ``onNoResults``
- **Dropdown** - Search dropdown will now strip html before searching values when searching html
- **Dropdown** - Search now has keyboard shortcut to open dropdown on arrow down

### Version 1.0.0 - November 24, 2014

- **Dropdown** - New dropdown type, searchable selection for large lists of choices

### Version 0.1.0 - Sep 25, 2013