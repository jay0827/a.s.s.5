import { ClientFunction, Selector } from "testcafe";
import {
  collapseButtonSelector, expandButtonSelector, getBarItemByTitle,
  getTabbedMenuItemByText, pageNavigator, propertyGridSelector, questions, questionToolbarActions,
  setJSON, toolbox, toolboxItemIcons, toolboxItemTitles, url, creatorTabDesignerName, creatorTabPreviewName
} from "../helper";
const title = "Responsiveness";

fixture`${title}`.page`${url}`.beforeEach(async (t) => {
  await t.resizeWindow(1920, 900);
});

const flyoutPropertyGrid = Selector(".svc-flyout-side-bar");

test("Check base responsiveness for tabbed menu", async (t) => {
  await ClientFunction(() => {
    window["creator"].showPropertyGrid = false;
  })();
  const tabbedMenuItemSelector = Selector(".svc-tabbed-menu .svc-tabbed-menu-item-container:nth-child(5)");
  await t
    .expect(tabbedMenuItemSelector.hasClass("sv-action--hidden")).notOk()
    .resizeWindow(700, 969)
    .expect(tabbedMenuItemSelector.hasClass("sv-action--hidden")).ok()
    .click(".svc-tabbed-menu-item-container.sv-dots");
  const popupSelector = Selector(".sv-popup").filterVisible();
  await t
    .expect(popupSelector.find(".sv-list__item").withText("Translation").visible).ok()
    .pressKey("esc")
    .expect(popupSelector.visible).notOk()
    .resizeWindow(1920, 900)
    .expect(await tabbedMenuItemSelector.hasClass("sv-action--hidden")).ok();
});

test("Check base responsiveness for toolbox", async (t) => {
  const tabbedMenuItemSelector = Selector(".svc-toolbox .svc-toolbox__tool:nth-child(20)");
  await t
    .expect(tabbedMenuItemSelector.hasClass("sv-action--hidden")).notOk()
    .resizeWindow(1280, 632)
    .expect(tabbedMenuItemSelector.hasClass("sv-action--hidden")).ok()
    .click(".svc-toolbox__tool.sv-dots");
  const popupSelector = Selector(".sv-popup").filterVisible();
  await t
    .expect(popupSelector.find(".sv-list__item").withText("Panel (dynamic panels)").visible).ok()
    .pressKey("esc")
    .expect(popupSelector.visible).notOk()
    .resizeWindow(1920, 900)
    .expect(tabbedMenuItemSelector.hasClass("sv-action--hidden")).notOk();
});

test("Responsive creator: toolbox & page navigator", async (t) => {
  await setJSON({
    pages: [
      {
        elements: [{ type: "text", name: "question1" }]
      },
      {
        elements: [{ type: "text", name: "question2" }]
      },
      {
        elements: [{ type: "text", name: "question2" }]
      }
    ]
  });
  await t
    .click(collapseButtonSelector)
    .expect(toolbox.visible).ok()
    .expect(toolboxItemIcons.count).eql(20)
    .expect(toolboxItemTitles.count).eql(20)
    .expect(pageNavigator.visible).ok()

    .resizeWindow(1000, 900)
    .expect(toolbox.visible).ok()
    .expect(toolboxItemIcons.count).eql(20)
    .expect(toolboxItemTitles.count).eql(0)
    .expect(pageNavigator.visible).ok()

    .resizeWindow(750, 500)
    .expect(toolbox.exists).notOk()
    .expect(pageNavigator.exists).notOk()

    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .click(getTabbedMenuItemByText(creatorTabDesignerName))
    .expect(toolbox.exists).notOk()
    .expect(pageNavigator.exists).notOk()

    .resizeWindow(1920, 900); // reset for next tests, beforeEach not work (((
});

async function changeSideBarLocation(newVal: string) {
  await ClientFunction((newVal) => {
    window["creator"].sideBarLocation = newVal;
  })(newVal);
}

test("Responsive creator: property grid", async (t) => {
  await setJSON({
    pages: [
      {
        elements: [{ type: "text", name: "question1" }, { type: "text", name: "question2" }]
      },
      {
        elements: [{ type: "text", name: "question2" }]
      }
    ]
  });
  const westResizer = Selector(".svc-resizer-west");
  const eastResizer = Selector(".svc-resizer-east");
  await t
    .expect(westResizer.visible).ok()
    .expect(eastResizer.visible).notOk()

    .click(questions.find(".sv-string-editor").withText("question1"))
    .expect(propertyGridSelector.visible).ok()
    .expect(propertyGridSelector.offsetWidth).eql(450)
    .expect(flyoutPropertyGrid.exists).notOk()
    .expect(questionToolbarActions.count).eql(4)

    .drag(westResizer, 100, 0)
    .expect(propertyGridSelector.offsetWidth).eql(370)

    .resizeWindow(750, 700)
    .expect(propertyGridSelector.visible).ok()
    .expect(propertyGridSelector.offsetWidth).eql(370)
    .expect(flyoutPropertyGrid.exists).ok()

    .drag(westResizer, -200, 0)
    .expect(propertyGridSelector.offsetWidth).eql(570)

    .click(collapseButtonSelector)
    .expect(propertyGridSelector.visible).notOk()
    .expect(flyoutPropertyGrid.exists).notOk()

    .click(questions.find(".sv-string-editor").withText("question2"))
    .expect(questionToolbarActions.count).eql(5)

    .click(questionToolbarActions.withText("Settings"))
    .expect(propertyGridSelector.visible).ok()
    .expect(flyoutPropertyGrid.exists).ok()

    .click(collapseButtonSelector)
    .expect(propertyGridSelector.visible).notOk()
    .expect(flyoutPropertyGrid.exists).notOk()

    .click(expandButtonSelector);
  await changeSideBarLocation("left");

  await t
    .expect(westResizer.visible).notOk()
    .expect(eastResizer.visible).ok()
    .expect(propertyGridSelector.offsetWidth).eql(570)

    .drag(eastResizer, -170, 0)
    .expect(propertyGridSelector.offsetWidth).eql(400)

    .resizeWindow(1920, 900) // reset for next tests
    .drag(eastResizer, 200, 0)
    .expect(propertyGridSelector.offsetWidth).eql(600);
});

test("Responsive creator: designer tab for mobile devices", async (t) => {
  const topToolBar = Selector(".svc-top-bar .sv-action-bar");
  const footerToolBar = Selector(".svc-footer-bar .sv-action-bar");

  await t
    .resizeWindow(750, 500)
    .click(collapseButtonSelector)
    .expect(topToolBar.visible).ok()
    .expect(footerToolBar.visible).notOk()
    .expect(topToolBar.find(".sv-action").filterVisible().count).eql(4)

    .resizeWindow(370, 400)
    .expect(topToolBar.visible).notOk()
    .expect(footerToolBar.visible).ok()
    .expect(footerToolBar.find(".sv-action").filterVisible().count).eql(4)

    .resizeWindow(1920, 900)
    .expect(topToolBar.visible).ok()
    .expect(footerToolBar.visible).notOk()
    .expect(topToolBar.find(".sv-action").filterVisible().count).eql(4);
});

test("property grid for mobile devices", async (t) => {
  const mobilePropertGrid = Selector(".sv-mobile-side-bar .svc-side-bar__container");
  const mobileCloseButton = Selector(".svc-side-bar__container-close");
  const mobilePropertGridTitle = Selector(".svc-side-bar__container-title");

  await t
    .resizeWindow(750, 500)
    .expect(mobilePropertGrid.exists).notOk()

    .resizeWindow(370, 400)
    .expect(mobilePropertGrid.visible).ok()
    .expect(mobilePropertGridTitle.textContent).eql("Survey")

    .click(mobileCloseButton)
    .expect(mobilePropertGrid.visible).notOk()

    .click(getBarItemByTitle("Settings").filterVisible())
    .expect(mobilePropertGrid.visible).ok()
    .expect(mobilePropertGridTitle.textContent).eql("Survey")

    .click(mobileCloseButton)
    .click(Selector("span").withText("Add Question"))
    .click(getBarItemByTitle("Settings").filterVisible().nth(0))
    .expect(mobilePropertGridTitle.textContent).eql("question1")

    .resizeWindow(1920, 900)
    .expect(mobilePropertGrid.exists).notOk()
    .expect(propertyGridSelector.visible).ok();
});

test("test tab for mobile devices", async (t) => {
  await setJSON({
    pages: [
      {
        elements: [{ type: "text", name: "question1" }]
      }
    ]
  });
  const testTabToolbar = Selector(".sv-action-bar--pages");
  const creatorFooterToolbar = Selector(".svc-footer-bar .svc-toolbar-wrapper");
  const creatorFooterToolbarActions = creatorFooterToolbar.find(".sv-action").filterVisible();
  await t
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .expect(testTabToolbar.exists).notOk()
    .expect(creatorFooterToolbar.exists).notOk()

    .resizeWindow(370, 400)
    .expect(testTabToolbar.exists).notOk()
    .expect(creatorFooterToolbarActions.count).eql(2)
    .expect(creatorFooterToolbarActions.nth(0).id).eql("showInvisible")
    .expect(creatorFooterToolbarActions.nth(1).id).eql("svd-designer")

    .resizeWindow(1920, 900)
    .expect(testTabToolbar.exists).notOk()
    .expect(creatorFooterToolbar.exists).notOk()

    .click(getTabbedMenuItemByText(creatorTabDesignerName))
    .click(Selector("span").withText("Add Question").nth(1))
    .click(getTabbedMenuItemByText(creatorTabPreviewName))
    .expect(testTabToolbar.exists).ok()
    .expect(creatorFooterToolbar.exists).notOk()
    .expect(testTabToolbar.find(".sv-action").filterVisible().count).eql(3)

    .resizeWindow(370, 400)
    .expect(testTabToolbar.exists).notOk()
    .expect(creatorFooterToolbarActions.count).eql(4)
    .expect(creatorFooterToolbarActions.nth(0).id).eql("showInvisible")
    .expect(creatorFooterToolbarActions.nth(1).id).eql("prevPage")
    .expect(creatorFooterToolbarActions.find(".sv-action-bar-item").nth(1).hasAttribute("disabled")).eql(true)
    .expect(creatorFooterToolbarActions.nth(1).hasClass("sv-action-bar-item--secondary")).notOk()
    .expect(creatorFooterToolbarActions.nth(2).id).eql("nextPage")
    .expect(creatorFooterToolbarActions.find(".sv-action-bar-item").nth(2).hasAttribute("disabled")).eql(false)
    .expect(creatorFooterToolbarActions.nth(2).hasClass("sv-action-bar-item--secondary")).ok()
    .expect(creatorFooterToolbarActions.nth(3).id).eql("svd-designer")

    .click(creatorFooterToolbarActions.nth(2))
    .expect(creatorFooterToolbarActions.find(".sv-action-bar-item").nth(1).hasAttribute("disabled")).eql(false)
    .expect(creatorFooterToolbarActions.nth(1).hasClass("sv-action-bar-item--secondary")).ok()
    .expect(creatorFooterToolbarActions.find(".sv-action-bar-item").nth(2).hasAttribute("disabled")).eql(true)
    .expect(creatorFooterToolbarActions.nth(2).hasClass("sv-action-bar-item--secondary")).notOk()

    .resizeWindow(1920, 900)
    .expect(testTabToolbar.exists).ok()
    .expect(creatorFooterToolbar.exists).notOk();
});

test("Property grid editor popup", async (t) => {
  const json = {
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "checkbox",
            "name": "question1",
            "title": "question1",
            "choices": [
              "item1",
              "item2",
              "item3"
            ]
          }
        ]
      }
    ]
  };
  await setJSON(json);

  const question1 = Selector("[name=\"question1\"]");
  const dataTab = Selector("h4").withExactText("Data");
  const item1PGEditorInput = Selector("[name=\"choices\"] [data-sv-drop-target-matrix-row]").nth(0).find("td").nth(1).find("input");
  await ClientFunction(() => {
    window["creator"].showPropertyGrid = true;
  })();
  await t
    .click(question1)
    .click(dataTab)
    .click(Selector("a").withExactText("Set Default value"))
    .expect(Selector(".sv-popup--modal").visible).ok()
    .click(Selector("button").withExactText("Cancel"))
    .resizeWindow(380, 600)
    .click(Selector("a").withExactText("Set Default value"))
    .expect(Selector(".sv-popup--overlay").visible).ok();
});

test("Question type popup - wide", async (t) => {
  const json = {
  };
  await setJSON(json);
  await ClientFunction(() => {
    window["creator"].showPropertyGrid = true;
  })();
  await t
    .click(Selector("button.svc-page__question-type-selector"))
    .expect(Selector(".sv-popup:not(.sv-popup--overlay) li").withText("Single Input").visible).ok();
});

test("Question type popup - narrow", async (t) => {
  const json = {
  };
  await setJSON(json);
  await ClientFunction(() => {
    window["creator"].showPropertyGrid = false;
  })();
  await t
    .resizeWindow(380, 600)
    .click(Selector("button.svc-page__question-type-selector"))
    .expect(Selector(".sv-popup.sv-popup--overlay li").withText("Single Input").visible).ok();
});