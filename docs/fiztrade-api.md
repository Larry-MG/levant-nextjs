# FizConnect API Reference

Base URL: https://stage-connect.fiztrade.com (staging) / https://connect.fiztrade.com (production)
Staging Token: 2896-89028eaac97eb473118d1121944ce30c
Chart Token: 2896-1b728abdbcf228453f91ed19eb31c890

## Spot Prices
GET /FizServices/GetSpotPriceData/{token}
Returns flat object: { goldAsk, goldBid, goldChange, goldChangePercent, silverAsk, silverBid, silverChange, silverChangePercent, platinumAsk, platinumBid, platinumChange, platinumChangePercent, palladiumAsk, palladiumBid, palladiumChange, palladiumChangePercent, areStale, activeFeed, timestamp, spotTime }

## Dealer Info
GET /FizServices/GetDealerInfo/{token}
Returns dealer account info.

## Product Catalog - By Metal
GET /FizServices/GetProductsByMetalV2/{token}/{metalType}
metalType: Gold | Silver | Platinum | Palladium
Returns array of products with: origin, name, metalType, code, description, isActiveBuy, isActiveSell, isPrivate, category, availability, isIRAEligible, fineness, isFractional, weight

availability values: Not Available | No Indication | Live | One Week | Two Weeks | Slight Delay | Delay | Few Days | Limited Quantity | 6-15 Days | 1-5 Days | 16-30 Days | Unknown Delay

## Product Catalog - Custom Dealer Products
GET /FizServices/GetCustomProducts/{token}/{transactionType}
transactionType: buy | sell
Returns array of { code, description } — products with custom premiums for this dealer.

## Product Catalog - Get by Code or Family
POST /FizServices/GetProductCatalog/{token}
Body (by family): { "familyId": "6", "IRAEligibleOnly": "yes" }
Body (by codes): { "items": ["1EAGLE", "1MAP"] }
Returns array of products with: description, purity, code, weight, origin, family, images[]
Images: { imgType: "default"|"obverse"|"reverse"|"small", imgPath: string, imgCode: string }
Image sizes: default=250x250, obverse=600x600, reverse=600x600, small=90x90

## Product Families by Metal
GET /FizServices/GetProductFamiliesByMetal/{token}/{metalType}/{iraOnly}
iraOnly: true | false
Returns array of { name, shortDescription, metalType, id }

## Pricing Tiers
GET /FizServices/GetPriceTiers/{token}/{metalType}
Returns array of { description, minQty, maxQty, tier, breakType }
Tier 1 = small qty (1-49), Tier 4 = best price (500+)

## Get Price for Single Product
GET /FizServices/GetPrices/{token}/{code}
Returns { code, availability, isActiveBuy, isActiveSell, tiers: { "1": {ask, bid, bidPercise, askPercise, spread}, "2": ..., "3": ..., "4": ... } }

## Get Prices for Multiple Products
POST /FizServices/GetPricesForProducts/{token}
Body: ["1EAGLE", "1MAP"]
Returns array of { code, tiers: {...}, availability, isActiveBuy, isActiveSell, metalType, isActiveSell }
