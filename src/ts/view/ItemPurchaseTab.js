import { PURCHASE_ERROR_MESSAGE } from '../constant/errorMessage';
import { generateItemPurchaseContentTemplate } from '../template';
import { selectDom, selectDoms, showSnackbar } from '../utils';
import AdminPage from './AdminPage';

class ItemPurchaseTab extends AdminPage {
  constructor(vendingMachine, itemManage, coinRecharge) {
    super(vendingMachine);
    this.itemManage = itemManage;
    this.coinRecharge = coinRecharge;

    this.itemPurchaseTabButton = null;
    this.itemPurchaseForm = null;
    this.itemPurchaseInput = null;
    this.inputAmountText = null;
    this.itemStatusTable = null;
    this.changeTable = null;
    this.coinCountList = null;
    this.changeButton = null;
  }

  renderInitialItemPurchaseTabState(isLoginUser) {
    this.renderNavBar(isLoginUser);
    this.itemPurchaseTabButton = selectDom('#item-purchase-tab-button', this.navBar);

    if (!isLoginUser) {
      this.navBar.remove();
      this.tabContent.classList.add('login');
    }

    this.changeTabContent(
      generateItemPurchaseContentTemplate(
        this.vendingMachine.money,
        this.itemManage.itemList,
        this.vendingMachine.change
      ),
      this.itemPurchaseTabButton
    );

    this.itemPurchaseForm = selectDom('#item-purchase-form', this.tabContent);
    this.itemPurchaseInput = selectDom('.item-purchase-input', this.itemPurchaseForm);
    this.inputAmountText = selectDom('#input-amount', this.tabContent);
    this.itemStatusTable = selectDom('.item-status-table', this.tabContent);
    this.changeTable = selectDom('.change-table', this.tabContent);
    this.coinCountList = selectDoms('.coin-count', this.changeTable);
    this.changeButton = selectDom('.give-change-button', this.tabContent);

    this.itemPurchaseForm.addEventListener('submit', this.#onSubmitItemPurchaseForm);
    this.itemStatusTable.addEventListener('click', this.#onClickPurchaseItemButton);
    this.changeButton.addEventListener('click', this.#onClickChangeButton);

    this.itemPurchaseInput.focus();
  }

  #onSubmitItemPurchaseForm = (e) => {
    e.preventDefault();

    const moneyInput = this.itemPurchaseInput.valueAsNumber;

    try {
      this.vendingMachine.validateMoneyInput(moneyInput);
    } catch (error) {
      showSnackbar(this.snackbar, error.message);

      this.itemPurchaseInput.value = '';
      this.itemPurchaseInput.focus();
      return;
    }
    this.vendingMachine.insertMoney(moneyInput);
    this.inputAmountText.textContent = this.vendingMachine.money;
  };

  #onClickPurchaseItemButton = ({ target }) => {
    if (this.#isPurchaseItemButton(target)) {
      const targetItem = target.closest('tr');
      const targetItemInfoIndex = this.itemManage.itemList.findIndex(
        (itemInfo) => itemInfo.itemName === targetItem.dataset.itemName
      );
      const { itemQuantity, itemPrice } = this.itemManage.itemList[targetItemInfoIndex];

      try {
        this.vendingMachine.validatePurchasingBehavior(
          itemQuantity,
          itemPrice,
          this.vendingMachine.money
        );
      } catch (error) {
        showSnackbar(this.snackbar, error.message);
        return;
      }

      this.vendingMachine.purchaseItem(itemPrice);
      this.itemManage.decreaseItemQuantity(targetItemInfoIndex);

      const itemQuantityCell = selectDom('.item-quantity', targetItem);
      this.#renderUpdatedDataAfterPurchaseItem(
        itemQuantity - 1,
        this.vendingMachine.money,
        itemQuantityCell
      );
    }
  };

  #onClickChangeButton = () => {
    if (this.vendingMachine.money === 0) {
      showSnackbar(this.snackbar, PURCHASE_ERROR_MESSAGE.CANNOT_GIVE_BACK_CHANGE);
      return;
    }

    this.coinRecharge.updateCoinCollection(
      this.vendingMachine.calculateChange(this.coinRecharge.coinCollection)
    );

    const remainedMoney = this.vendingMachine.money;
    this.#renderUpdatedDataAfterGiveChange(this.coinCountList, remainedMoney);

    if (remainedMoney !== 0) {
      showSnackbar(this.snackbar, PURCHASE_ERROR_MESSAGE.CANNOT_GIVE_BACK_CHANGE_ALL);
      return;
    }
    showSnackbar(this.snackbar, PURCHASE_ERROR_MESSAGE.GIVE_BACK_CHANGE_SUCCESS);
  };

  #renderUpdatedDataAfterPurchaseItem(decreasedItemQuantity, decreasedMoney, itemQuantityCell) {
    itemQuantityCell.textContent = decreasedItemQuantity;
    this.inputAmountText.textContent = decreasedMoney;
  }

  #renderUpdatedDataAfterGiveChange(coinCountList, remainedMoney) {
    coinCountList.forEach((coinCount) => {
      coinCount.textContent = `${this.vendingMachine.change[coinCount.dataset.coinValue]}개`;
    });
    this.inputAmountText.textContent = remainedMoney;
  }

  #isPurchaseItemButton(target) {
    return target.classList.contains('purchase-item-button');
  }
}

export default ItemPurchaseTab;
