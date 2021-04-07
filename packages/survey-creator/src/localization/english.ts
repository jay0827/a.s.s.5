//Uncomment this line on creating a translation file
//import { editorLocalization, defaultStrings } from "../editorLocalization";

export var enStrings = {
  //survey templates
  survey: {
    edit: "Edit",
    externalHelpLink: "Watch and learn how to create surveys",
    externalHelpLinkUrl:
      "https://www.youtube.com/channel/UCH2ru9okIcooNZfpIbyq4qQ?view_as=subscriber",
    dropQuestion: "Please drop a question here from the Toolbox.",
    addLogicItem: "Create a rule to customize the flow of the survey.",
    copy: "Copy",
    duplicate: "Duplicate",
    addToToolbox: "Add to toolbox",
    deletePanel: "Delete Panel",
    deleteQuestion: "Delete Question",
    convertTo: "Convert to",
    drag: "Drag element",
  },
  //questionTypes
  qt: {
    default: "Default",
    checkbox: "Checkbox",
    comment: "Comment",
    imagepicker: "Image picker",
    ranking: "Ranking",
    image: "Image",
    dropdown: "Dropdown",
    file: "File",
    html: "Html",
    matrix: "Matrix (single choice)",
    matrixdropdown: "Matrix (multiple choice)",
    matrixdynamic: "Matrix (dynamic rows)",
    multipletext: "Multiple Text",
    panel: "Panel",
    paneldynamic: "Panel (dynamic panels)",
    radiogroup: "Radiogroup",
    rating: "Rating",
    text: "Single Input",
    boolean: "Boolean",
    expression: "Expression (read-only)",
    signaturepad: "Signature pad",
    flowpanel: "Flow Panel",
  },
  //Strings in Editor
  ed: {
    defaultLocale: "Default ({0})",
    survey: "Survey",
    settings: "Survey Settings",
    settingsTooltip: "Open survey settings",
    //opjectPropertiesHeader: "Advanced",
    //showObjectProperties: "Show Object Properties",
    //hideObjectProperties: "Hide Object Properties",
    showPanel: "Show Panel",
    hidePanel: "Hide Panel",
    //editSurvey: "Edit Survey",
    addNewPage: "Add New Page",
    moveRight: "Scroll to the Right",
    moveLeft: "Scroll to the Left",
    deletePage: "Delete Page",
    editPage: "Edit Page",
    edit: "Edit",
    newPageName: "page",
    newQuestionName: "question",
    newPanelName: "panel",
    newTextItemName: "text",
    testSurvey: "Test Survey",
    testSurveyAgain: "Test Survey Again",
    testSurveyWidth: "Survey width: ",
    navigateToMsg: "You had to navigate to:",
    logic: "Survey Logic",
    embedSurvey: "Embed Survey",
    translation: "Translation",
    saveSurvey: "Save Survey",
    saveSurveyTooltip: "Save Survey",
    designer: "Survey Designer",
    jsonEditor: "JSON Editor",
    undo: "Undo",
    redo: "Redo",
    undoTooltip: "Undo last change",
    redoTooltip: "Redo the change",
    copy: "Copy",
    cut: "Cut",
    paste: "Paste",
    copyTooltip: "Copy selection to clipboard",
    cutTooltip: "Cut selection to clipboard",
    pasteTooltip: "Paste from clipboard",
    options: "Options",
    generateValidJSON: "Generate Valid JSON",
    generateReadableJSON: "Generate Readable JSON",
    toolbox: "Toolbox",
    "property-grid": "Properties",
    toolboxGeneralCategory: "General",
    //delSelObject: "Delete selected object",
    //editSelObject: "Edit selected object",
    correctJSON: "Please correct JSON.",
    surveyResults: "Survey Result: ",
    surveyResultsTable: "As Table",
    surveyResultsJson: "As JSON",
    resultsTitle: "Question Title",
    resultsName: "Question Name",
    resultsValue: "Answer Value",
    resultsDisplayValue: "Display Value",
    modified: "Modified",
    saving: "Saving",
    saved: "Saved",
    propertyEditorError: "Error:",
    saveError: "Error! Editor content is not saved.",
    translationAddLanguage: "Select language to translate",
    translationShowAllStrings: "Show all strings",
    translationShowAllPages: "Show all pages",
    translationNoStrings: "No strings to translate. Please, change the filter.",
    translationExportToSCVButton: "Export to CSV",
    translationImportFromSCVButton: "Import from CSV",
    translationMergeLocaleWithDefault: "Merge {0} with default locale",
    bold: "Bold",
    italic: "Italic",
    underline: "Underline",
    fpAddQuestion: "Add question...",
    selectPage: "Select page...",
    chooseElement: "Choose element...",
    //completedHtmlOnConditionItemText: "Show if:",
    lg: {
      addNewItem: "", //By default the value is taken from pe.addNew 'Add New', you can set it to 'Add New Rule' for example.
      //Logic tab strings
      page_visibilityName: "Page visibility",
      panel_visibilityName: "Panel visibility",
      panel_enableName: "Panel enable/disable",
      question_visibilityName: "Question visibility",
      question_enableName: "Question enable/disable",
      question_requireName: "Question optional required",
      trigger_completeName: "Complete survey",
      trigger_setvalueName: "Set question value",
      trigger_copyvalueName: "Copy question value",
      trigger_skipName: "Skip to question",
      trigger_runExpressionName: "Run custom expression",
      completedHtmlOnConditionName: "Custom 'Thank you page' text",

      page_visibilityDescription:
        "Make the page visible when the logic expression returns true. Otherwise keep it invisible.",
      panel_visibilityDescription:
        "Make the panel visible when the logic expression returns true. Otherwise keep it invisible.",
      panel_enableDescription:
        "Make the panel, and all elements inside it, enable when the logic expression returns true. Otherwise keep them disabled.",
      question_visibilityDescription:
        "Make the question visible when the logic expression returns true. Otherwise keep it invisible.",
      question_enableDescription:
        "Make the question enable when the logic expression returns true. Otherwise keep it disabled.",
      question_requireDescription:
        "Question becomes required when the logic expression returns true.",
      trigger_completeDescription:
        "When the logic expression returns true then the survey becomes completed and an end-user see the 'Thank you page'.",
      trigger_setvalueDescription:
        "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value is set to the selected question.",
      trigger_copyvalueDescription:
        "When question values, that are used in the logic expression, are changed and the logic expression returns true, then the value of one selected question is copied to another selected question.",
      trigger_skipDescription:
        "When the logic expression returns true then the survey skip to / focus the selected question.",
      trigger_runExpressionDescription:
        "When the logic expression returns true, then the custom expression is performed. You may optionally set this expression result into the selected question",
      completedHtmlOnConditionDescription:
        "If the logic expression returns true, then the default text for the 'Thank you page' is changed to the given one.",

      itemExpressionText: "When expression: '{0}' returns true:", //{0} - the expression
      page_visibilityText: "Make page {0} visible", //{0} page name
      panel_visibilityText: "Make panel {0} visible", //{0} panel name
      panel_enableText: "Make panel {0} enable", //{0} panel name
      question_visibilityText: "Make question {0} visible", //{0} question name
      question_enableText: "Make question {0} enable", //{0} question name
      question_requireText: "Make question {0} required", //{0} question name
      trigger_completeText: "Survey becomes completed",
      trigger_setvalueText: "Set into question: {0} value {1}", //{0} question name, {1} setValue
      trigger_copyvalueText: "Copy into question: {0} value from question {1}", //{0} and {1} question names
      trigger_skipText: "Survey skip to the question {0}", //{0} question name
      trigger_runExpressionText1: "Run expression: '{0}'", //{0} the expression
      trigger_runExpressionText2: " and set its result into question: {0}", //{0} question name
      completedHtmlOnConditionText:
        "Show custom text for the 'Thank you page'.",

      conditions: "Condition(s)",
      actions: "Action(s)",
      expressionEditorTitle: "Define condition(s)",
      actionsEditorTitle: "Define action(s)",

      deleteAction: "Delete action",
      addNewAction: "Add new action",
      selectedActionCaption: "Select an action to add...",

      expressionInvalid:
        "The logic expression is empty or invalid. Please correct it.",
      noActionError: "Please, add at least one action.",
      actionInvalid: "Please, fix problems in your action(s).",
      expressionSetup: "",
      actionsSetup: "",
    },
  },
  //Property names in table headers
  // pel: {
  //   isRequired: "Required?"
  // },
  //Property Editors
  pe: {
    apply: "Apply",
    ok: "OK",
    save: "Save",
    saveTooltip: "Save",
    cancel: "Cancel",
    reset: "Reset",
    refresh: "Refresh",
    // close: "Close",
    delete: "Delete",
    add: "Add",
    addNew: "Add New",
    addItem: "Click to add an item...",
    addOther: "Other",
    addSelectAll: "Select All",
    addNone: "None",
    removeAll: "Remove All",
    edit: "Edit",
    back: "Return without saving",
    backTooltip: "Return without saving",
    saveAndBack: "Save and return",
    saveAndBackTooltip: "Save and return",
    // itemValueEdit: "Visible If",
    editChoices: "Edit Choices",
    showChoices: "Show Choices",
    move: "Move",
    empty: "<empty>",
    // notEmpty: "<edit value>",
    fastEntry: "Fast Entry",
    formEntry: "Form Entry",
    testService: "Test the service",
    itemSelectorEmpty: "Please select the element",
    conditionActionEmpty: "Please select the action",
    conditionSelectQuestion: "Select question...",
    conditionSelectPage: "Select page...",
    conditionSelectPanel: "Select panel...",
    conditionValueQuestionTitle: "Please enter/select the value",
    // conditionHelp:
    //   "Please enter a boolean expression. It should return true to keep the question/page visible. For example: {question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
    expressionHelp:
      "You can use curly brackets to get access to the question values: {question1} + {question2}, ({price}*{quantity}) * (100 - {discount}). You can use functions as: iif(), today(), age(), min(), max(), count(), avg() and others.",
    aceEditorHelp: "Press ctrl+space to get expression completion hint",
    aceEditorRowTitle: "Current row",
    aceEditorPanelTitle: "Current panel",
    showMore: "For more details please check the documentation",
    // conditionShowMoreUrl:
    //   "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
    assistantTitle: "Available questions:",
    cellsEmptyRowsColumns: "There is should be at least one column or row",

    propertyIsEmpty: "Please enter a value",
    propertyIsNoUnique: "Please enter a unique value",
    propertyNameIsNotUnique: "Please enter a unique name",
    listIsEmpty: "Add a new item",
    expressionIsEmpty: "Expression is empty",
    value: "Value",
    text: "Text",
    rowid: "Row ID",
    imageLink: "Image Link",
    columnEdit: "Edit column: {0}",
    itemEdit: "Edit item: {0}",

    url: "URL",
    path: "Path",
    valueName: "Value name",
    titleName: "Title name",
    titlePlaceholder: "Input title here",
    surveyTitlePlaceholder: "Input survey title here",
    pageTitlePlaceholder: "Input page title here",
    descriptionPlaceholder: "Enter a description",
    surveyDescriptionPlaceholder: "Enter a survey description",
    pageDescriptionPlaceholder: "Enter a page description",

    hasOther: "Has other item",
    otherText: "Other item text",
    hasNone: "Has none item",
    noneText: "None item text",
    hasSelectAll: "Has select all item",
    selectAllText: "Select all item text",
    choicesMin: "Minimum value for auto generated items",
    choicesMax: "Maximum value for auto generated items",
    choicesStep: "The difference between auto generated items",
    name: "Name",
    title: "Title",
    cellType: "Cell type",
    colCount: "Column count",
    choicesOrder: "Select choices order",
    visible: "Is visible?",
    isRequired: "Is required?",
    isAllRowRequired: "Require answer for all rows",
    requiredErrorText: "Required error text",
    startWithNewLine: "Is start with new line?",
    rows: "Row count",
    cols: "Column count",
    placeHolder: "Input place holder",
    showPreview: "Show preview area",
    storeDataAsText: "Store file content in JSON result as text",
    maxSize: "Maximum file size in bytes",
    imageHeight: "Image height",
    imageWidth: "Image width",
    rowCount: "Row count",
    columnLayout: "Columns layout",
    addRowLocation: "Add row button location",
    addRowText: "Add row button text",
    removeRowText: "Remove row button text",
    rateMin: "Minimum rate",
    rateMax: "Maximum rate",
    rateStep: "Rate step",
    minRateDescription: "Minimum rate description",
    maxRateDescription: "Maximum rate description",
    inputType: "Input type",
    optionsCaption: "Options caption",
    defaultValue: "Default value",
    cellsDefaultRow: "Default cells texts",

    surveyEditorTitle: "Edit survey settings",
    qEditorTitle: "Edit: {0}",

    maxLength: "Maximum length",

    buildExpression: "Build",
    editExpression: "Edit",
    and: "And",
    or: "Or",
    remove: "Remove",
    addCondition: "Add condition",

    //survey
    showTitle: "Show/hide title",
    expandCollapseTitle: "Expand/collapse title",
    locale: "Default language",
    simulator: "Choose device",
    landscapeOrientation: "Landscape",
    mode: "Mode (edit/read only)",
    clearInvisibleValues: "Clear invisible values",
    cookieName: "Cookie name (to disable run survey two times locally)",
    sendResultOnPageNext: "Send survey results on page next",
    storeOthersAsComment: "Store 'others' value in separate field",
    showPageTitles: "Show page titles",
    showPageNumbers: "Show page numbers",
    pagePrevText: "Page previous button text",
    pageNextText: "Page next button text",
    completeText: "Complete button text",
    previewText: "Preview button text",
    editText: "Edit button text",
    startSurveyText: "Start button text",
    showNavigationButtons: "Show navigation buttons (default navigation)",
    showPrevButton: "Show previous button (user may return on previous page)",
    firstPageIsStarted: "The first page in the survey is a started page.",
    showCompletedPage: "Show the completed page at the end (completedHtml)",
    goNextPageAutomatic:
      "On answering all questions, go to the next page automatically",
    showProgressBar: "Show progress bar",
    questionTitleLocation: "Question title location",
    requiredText: "The question required symbol(s)",
    questionStartIndex: "Question start index (1, 2 or 'A', 'a')",
    showQuestionNumbers: "Show question numbers",
    questionTitleTemplate:
      "Question title template, default is: '{no}. {require} {title}'",
    questionErrorLocation: "Question error location",
    focusFirstQuestionAutomatic: "Focus first question on changing the page",
    questionsOrder: "Elements order on the page",
    maxTimeToFinish: "Maximum time to finish the survey",
    maxTimeToFinishPage: "Maximum time to finish a page in the survey",
    showTimerPanel: "Show timer panel",
    showTimerPanelMode: "Show timer panel mode",
    renderMode: "Render mode",
    allowAddPanel: "Allow adding a panel",
    allowRemovePanel: "Allow removing the panel",
    panelAddText: "Adding panel text",
    panelRemoveText: "Removing panel text",
    isSinglePage: "Show all elements on one page",
    html: "Html",
    expression: "Expression",

    minValue: "Minimum value",
    maxValue: "Maximum value",
    minLength: "Minimum length",
    allowDigits: "Allow digits",
    minCount: "Minimum count",
    maxCount: "Maximum count",
    regex: "Regular expression",

    totalText: "Total text",
    totalType: "Total type",
    totalExpression: "Total expression",
    totalDisplayStyle: "Total display style",
    totalCurrency: "Total currency",
    totalFormat: "Total format",

    // Header  adorner
    logoPosition: "Logo position",
    addLogo: "Add logo...",
    changeLogo: "Change logo...",
    logoPositions: {
      none: "Remove logo",
      left: "Left",
      right: "Right",
      top: "On the top",
      bottom: "In the bottom",
    },

    tabs: {
      general: "General",
      fileOptions: "Options",
      html: "Html Editor",
      columns: "Columns",
      rows: "Rows",
      choices: "Choices",
      items: "Items",
      visibleIf: "Visible If",
      enableIf: "Enable If",
      requiredIf: "Required If",
      rateValues: "Rate Values",
      choicesByUrl: "Choices from Web",
      matrixChoices: "Default Choices",
      multipleTextItems: "Text Inputs",
      numbering: "Numbering",
      validators: "Validators",
      navigation: "Navigation",
      question: "Question",
      pages: "Pages",
      completedHtml: "Completed Html",
      completedHtmlOnCondition: "Completed Html on Condition",
      loadingHtml: "Loading Html",
      timer: "Timer/Quiz",
      calculatedValues: "Calculated Values",
      triggers: "Triggers",
      templateTitle: "Template title",
      totals: "Totals",
      logic: "Logic",
      layout: "Layout",
      data: "Data",
      validation: "Validation",
      cells: "Cells",
      showOnCompleted: "Show on Completed",
      logo: "Logo in Survey Title",
      slider: "Slider",
      others: "Others",
    },
    editProperty: "Edit property '{0}'",
    items: "[ Items: {0} ]",

    enterNewValue: "Please, enter the value.",
    noquestions: "There is no any question in the survey.",
    createtrigger: "Please create a trigger",
    titleKeyboardAdornerTip: "Press enter button to edit",
    keyboardAdornerTip: "Press enter button to edit item, press delete button to delete item, press alt plus arrow up or arrow down to move item",
    keyboardMoveItemsTip: "Press alt plus arrow up or arrow down to move item",
    triggerOn: "On ",
    triggerMakePagesVisible: "Make pages visible:",
    triggerMakeQuestionsVisible: "Make elements visible:",
    triggerCompleteText: "Complete the survey if succeed.",
    triggerNotSet: "The trigger is not set",
    triggerRunIf: "Run if",
    triggerSetToName: "Change value of: ",
    triggerFromName: "Copy value from: ",
    triggerRunExpression: "Run this Expression:",
    triggerSetValue: "to: ",
    triggerGotoName: "Go to the question:",
    triggerIsVariable: "Do not put the variable into the survey result.",
    triggerRunExpressionEmpty: "Please enter a valid expression",

    noFile: "No file choosen",
  },
  //Property values
  pv: {
    true: "true",
    false: "false",
    inherit: "inherit",
    show: "show",
    hide: "hide",
    default: "default",
    initial: "initial",
    random: "random",
    collapsed: "collapsed",
    expanded: "expanded",
    none: "none",
    asc: "ascending",
    desc: "descending",
    indeterminate: "indeterminate",
    decimal: "decimal",
    currency: "currency",
    percent: "percent",
    firstExpanded: "firstExpanded",
    off: "off",
    onPanel: "onPanel",
    onSurvey: "onSurvey",
    list: "list",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "top",
    bottom: "bottom",
    topBottom: "top and bottom",
    both: "both",
    left: "left",
    color: "color",
    date: "date",
    datetime: "datetime",
    "datetime-local": "datetime-local",
    email: "email",
    month: "month",
    number: "number",
    password: "password",
    range: "range",
    tel: "tel",
    text: "text",
    time: "time",
    url: "url",
    week: "week",
    hidden: "hidden",
    on: "on",
    onPage: "onPage",
    edit: "edit",
    display: "display",
    onComplete: "onComplete",
    onHidden: "onHidden",
    all: "all",
    page: "page",
    survey: "survey",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged",
    singlePage: "single page",
    standard: "standard",
    questionPerPage: "question per page",
    noPreview: "no preview",
    showAllQuestions: "show preview with all questions",
    showAnsweredQuestions: "show preview with answered questions",
  },
  //Operators
  op: {
    empty: "is empty",
    notempty: "is not empty",
    equal: "equals",
    notequal: "not equals",
    contains: "contains",
    notcontains: "not contains",
    anyof: "any of",
    allof: "all of",
    greater: "greater",
    less: "less",
    greaterorequal: "greater or equals",
    lessorequal: "less or equals",
    and: "and",
    or: "or",
  },
  //Embed window
  ew: {
    angular: "Use Angular version",
    jquery: "Use jQuery version",
    knockout: "Use Knockout version",
    react: "Use React version",
    vue: "Use Vue version",
    bootstrap: "For bootstrap framework",
    modern: "Modern theme",
    default: "Default theme",
    orange: "Orange theme",
    darkblue: "Darkblue theme",
    darkrose: "Darkrose theme",
    stone: "Stone theme",
    winter: "Winter theme",
    winterstone: "Winter-Stone theme",
    showOnPage: "Show survey on a page",
    showInWindow: "Show survey in a window",
    loadFromServer: "Load Survey JSON from server",
    titleScript: "Scripts and styles",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript",
  },
  //Test Survey
  ts: {
    selectPage: "Select the page to test it:",
    showInvisibleElements: "Show invisible elements",
  },
  validators: {
    answercountvalidator: "answer count",
    emailvalidator: "e-mail",
    expressionvalidator: "expression",
    numericvalidator: "numeric",
    regexvalidator: "regex",
    textvalidator: "text",
  },
  triggers: {
    completetrigger: "complete survey",
    setvaluetrigger: "set value",
    copyvaluetrigger: "copy value",
    skiptrigger: "skip to question",
    runexpressiontrigger: "run expression",
    visibletrigger: "change visibility (deprecated)",
  },
  pehelp: {
    //expression:
  },
  //Properties
  p: {
    name: "name",
    title: {
      name: "title",
      title: "Leave it empty, if it is the same as 'Name'",
    },

    navigationButtonsVisibility: "navigationButtonsVisibility",
    questionsOrder: "questionsOrder",
    maxTimeToFinish: "maxTimeToFinish",

    visible: "visible",
    visibleIf: "visibleIf",
    questionTitleLocation: "questionTitleLocation",
    description: "description",
    state: "state",
    isRequired: "isRequired",
    requiredIf: "requiredIf",
    indent: "indent",
    requiredErrorText: "requiredErrorText",
    startWithNewLine: "startWithNewLine",
    innerIndent: "innerIndent",
    page: "page",

    width: "width",

    commentText: "commentText",
    valueName: "valueName",
    enableIf: "enableIf",
    defaultValue: "defaultValue",
    correctAnswer: "correctAnswer",
    readOnly: "readOnly",
    validators: "validators",
    titleLocation: "titleLocation",

    hasComment: "hasComment",
    hasOther: "hasOther",
    choices: "choices",
    choicesOrder: "choicesOrder",
    choicesByUrl: "choicesByUrl",
    otherText: "otherText",
    otherErrorText: "otherErrorText",
    storeOthersAsComment: "storeOthersAsComment",

    label: "label",
    showTitle: "showTitle",
    valueTrue: "valueTrue",
    valueFalse: "valueFalse",

    cols: "cols",
    rows: "rows",
    placeHolder: "placeHolder",

    optionsCaption: "optionsCaption",

    expression: "expression",
    format: "format",
    displayStyle: "displayStyle",
    currency: "currency",
    useGrouping: "useGrouping",

    showPreview: "showPreview",
    allowMultiple: "allowMultiple",
    imageHeight: "imageHeight",
    imageWidth: "imageWidth",
    storeDataAsText: "storeDataAsText",
    maxSize: "maxSize",

    html: "html",

    columns: "columns",
    cells: "cells",
    isAllRowRequired: "isAllRowRequired",

    horizontalScroll: "horizontalScroll",
    cellType: "cellType",
    columnsLayout: "columnsLayout",
    columnColCount: "columnColCount",
    columnMinWidth: "columnMinWidth",

    rowCount: "rowCount",
    minRowCount: "minRowCount",
    maxRowCount: "maxRowCount",
    keyName: "keyName",
    keyDuplicationError: "keyDuplicationError",
    confirmDelete: "confirmDelete",
    confirmDeleteText: "confirmDeleteText",
    addRowLocation: "addRowLocation",
    addRowText: "addRowText",
    removeRowText: "removeRowText",

    items: "items",
    itemSize: "itemSize",
    colCount: "colCount",

    templateTitle: "templateTitle",
    templateDescription: "templateDescription",
    allowAddPanel: "allowAddPanel",
    allowRemovePanel: "allowRemovePanel",
    panelCount: "panelCount",
    minPanelCount: "minPanelCount",
    maxPanelCount: "maxPanelCount",
    panelsState: "panelsState",
    panelAddText: "panelAddText",
    panelRemoveText: "panelRemoveText",
    panelPrevText: "panelPrevText",
    panelNextText: "panelNextText",
    showQuestionNumbers: "showQuestionNumbers",
    showRangeInProgress: "showRangeInProgress",
    renderMode: "renderMode",
    templateTitleLocation: "templateTitleLocation",

    rateValues: "rateValues",
    rateMin: "rateMin",
    rateMax: "rateMax",
    rateStep: "rateStep",
    minRateDescription: "minRateDescription",
    maxRateDescription: "maxRateDescription",

    inputType: "inputType",
    size: "size",

    locale: "locale",
    focusFirstQuestionAutomatic: "focusFirstQuestionAutomatic",
    completedHtml: "completedHtml",
    completedBeforeHtml: "completedBeforeHtml",
    loadingHtml: "loadingHtml",
    triggers: "triggers",
    cookieName: "cookieName",
    sendResultOnPageNext: "sendResultOnPageNext",
    showNavigationButtons: "showNavigationButtons",
    showPrevButton: "showPrevButton",
    showPageTitles: "showPageTitles",
    showCompletedPage: "showCompletedPage",
    showPageNumbers: "showPageNumbers",
    questionErrorLocation: "questionErrorLocation",
    showProgressBar: "showProgressBar",
    mode: "mode",
    goNextPageAutomatic: "goNextPageAutomatic",
    checkErrorsMode: "checkErrorsMode",
    clearInvisibleValues: "clearInvisibleValues",
    startSurveyText: "startSurveyText",
    pagePrevText: "pagePrevText",
    pageNextText: "pageNextText",
    completeText: "completeText",
    requiredText: "requiredText",
    questionStartIndex: "questionStartIndex",
    questionTitleTemplate: "questionTitleTemplate",
    firstPageIsStarted: "firstPageIsStarted",
    isSinglePage: "isSinglePage",
    maxTimeToFinishPage: "maxTimeToFinishPage",
    showTimerPanel: "showTimerPanel",
    showTimerPanelMode: "showTimerPanelMode",

    defaultPanelValue: "defaultPanelValue",
    defaultRowValue: "defaultRowValue",
    hasNone: "hasNone",
    noneText: "noneText",

    text: "text",
  },
};
//Uncomment this line on creating a translation file. You should replace "en" and enStrings with your locale ("fr", "de" and so on) and your variable.
//editorLocalization.locales["en"] = enStrings;
