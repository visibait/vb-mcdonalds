ESX = nil
ESX = exports["es_extended"]:getSharedObject()

ItemsPlayerCanBuy = { -- Prevents Exploiting...
  "combomeal",
  "bigmac",
  "mcpollo",
  "mcroyaldeluxe",
  "cbo",
  "cuartodelibra",
  "grandmcextreme",
  "bigchickensupreme",
  "bigcrispybbq",
  "bigdoublecheese",
  "hamburgesa",
  "hamburgesadepollo",
  "mcfish",
  "happymeal",
  "cocacola",
  "nestea",
  "agua",
  "monsterenergy",
  "cerveza",
  "aquarius",
  "sprite",
  "colacao",
  "nuggets",
  "patatasfritas",
  "topfries",
  "fanta",
}

RegisterServerEvent('vb-mcdonalds:realizarpedido')
AddEventHandler('vb-mcdonalds:realizarpedido', function(data)
    local _src = source
    local _char = ESX.GetPlayerFromId(_src)
    local _charmoney = _char.getMoney()
    local _price = tonumber(data.price * data.amount)
    local _isitemvalid = false
    for k,v in pairs(ItemsPlayerCanBuy) do
      if v == data.item then
        _isitemvalid = true
      end
    end
    if _isitemvalid then
      if _charmoney >= _price and _price > 0 then
        _char.removeMoney(_price)
        _char.addInventoryItem(data.item, data.amount)
        --TriggerClientEvent('mythic_notify:client:SendAlert',_src, { type = 'success', length = 5000, text = "Has comprado una " .. data.item .. " por " .. data.price .. "$ con éxito." }) -- EXAMPLE
        -- ADD YOUR NOTIFICATIONS RIGHT HERE!
      else
        --TriggerClientEvent('mythic_notify:client:SendAlert',_src, { type = 'error', length = 5000, text = "No tienes suficiente dinero en efectivo." }) -- EXAMPLE
        -- ADD YOUR NOTIFICATIONS RIGHT HERE!
      end
    else
      DropPlayer(_src, "Player has triggered a VB-McDonald's event to purchase an item that isn't on the valid item list!")
    end
end)
