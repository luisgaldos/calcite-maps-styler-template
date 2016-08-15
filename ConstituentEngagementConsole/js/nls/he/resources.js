/*global define */
/*jslint sloppy:true */
/*
| Copyright 2014 Esri
|
| Licensed under the Apache License, Version 2.0 (the "License");
| you may not use this file except in compliance with the License.
| You may obtain a copy of the License at
|
|    http://www.apache.org/licenses/LICENSE-2.0
|
| Unless required by applicable law or agreed to in writing, software
| distributed under the License is distributed on an "AS IS" BASIS,
| WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
| See the License for the specific language governing permissions and
| limitations under the License.
*/
define({
  "map": {
    "error": "לא ניתן ליצור מפה"
  },
  "webMapList": {
    "owner": "יוצר",
    "created": "תאריך יצירה",
    "modified": "תאריך שינוי",
    "description": "תיאור",
    "snippet": "סיכום",
    "licenseInfo": "מגבלות גישה ושימוש",
    "accessInformation": "קרדיט",
    "tags": "תגיות",
    "numViews": "מספר מבטים",
    "avgRating": "דירוג",
    "noWebMapInGroup": "הקבוצה שהוגדרה לא חוקית או שלא שותפו עדיין פריטים עם קבוצה זו",
    "infoBtnToolTip": "מידע על המפה",
    "openWebmapList": "פתח את הפאנל",
    "closeWebmapList": "סגור פאנל"
  },
  "geoform": {
    "enterInformation": "פרטים",
    "selectAttachments": "קבצים מקושרים",
    "selectFileText": "נתב",
    "enterLocation": "מיקום",
    "reportItButton": "שלח",
    "cancelButton": "ביטול",
    "requiredField": "(נדרש)",
    "selectDefaultText": "בחר&hellip;",
    "invalidInputValue": "הזן ערך חוקי.",
    "noFieldsConfiguredMessage": "שדות השכבות לא מוגדרים ללכידת נתונים",
    "invalidSmallNumber": "הזן מספר שלם",
    "invalidNumber": "הזן מספר שלם",
    "invalidFloat": "הזן מספר",
    "invalidDouble": "הזן מספר",
    "requiredFields": "ציין ערכים בכל שדות החובה",
    "selectLocation": "בחר מיקום לדוח",
    "numericRangeHintMessage": "${openStrong}רמז:${closeStrong} ערך מינימלי ${minValue} וערך מקסימלי ${maxValue}",
    "dateRangeHintMessage": "${openStrong}רמז:${closeStrong} תאריך מינימלי ${minValue} ותאריך מקסימלי ${maxValue}",
    "errorsInApplyEdits": "לא ניתן לשלוח דוח",
    "attachmentSelectedMsg": "קבצים מצורפים נבחרו",
    "attachmentUploadStatus": "נכשלה ההעלאה של ${failed} מתוך ${total} קבצים מצורפים",
    "geoLocationError": "מיקום נוכחי לא זמין",
    "geoLocationOutOfExtent": "המיקום נוכחי נמצא מחוץ לגבולות מפת הבסיס",
    "submitButtonTooltip": "שמירה",
    "cancelButtonTooltip": "ביטול",
    "geoformBackButtonTooltip": "חזור לרשימת הדוחות",
    "updateFeaturesConfirmationMsg": "${count} תכונות יעודכנו",
    "attachmentHeaderText": "קבצים מקושרים"
  },
  "mapViewer": {
    "zoomInToolTip": "התמקד פנימה",
    "zoomOutToolTip": "התמקד החוצה"
  },
  "applicationHeader": {
    "signInOption": "הירשם",
    "signOutOption": "התנתק",
    "pleaseSignInText": "אנא התחבר"
  },
  "dataviewer": {
    "noIssuesReported": "אין דוחות זמינים",
    "noFeatureGeometry": "לא ניתן להציג את הישות",
    "ascendingFlagTitle": "מיין בסדר עולה",
    "descendingFlagTitle": "מיין בסדר יורד",
    "filterLabel": "מסנן",
    "valueRadioButtonLabel": "ערך",
    "uniqueRadioButtonLabel": "יחודי",
    "selectLayerToBegin": "בחר קטגוריה כדי להתחיל",
    "layerFeatureCount": "כן_${selectedFeatureCount} selected / ${featureCount} records__________________ש"
  },
  "timeSlider": {
    "timeSliderLabel": "טווח זמן",
    "timeSliderInEditModeAlert": "סרגל הזמן אינו זמין בעת עריכה"
  },
  "comment": {
    "commentsFormSubmitButton": "שמירה",
    "commentsFormCancelButton": "ביטול",
    "errorInSubmittingComment": "לא ניתן לשמור פעולות עריכה.",
    "emptyCommentMessage": "ערך דרוש",
    "placeHolderText": "",
    "noCommentsAvailableText": "אין רשומות זמינות",
    "remainingTextCount": "נותרו ${0} תווים",
    "showNoText": "לא",
    "selectAttachments": "כן_Attachments____ש",
    "selectFileText": "כן_Browse___ש",
    "attachmentSelectedMsg": "כן_attachment(s) selected________ש",
    "attachmentHeaderText": "כן_Attachments____ש",
    "addRecordText": "כן_Add Record____ש"
  },
  "main": {
    "noGroup": "לא הוגדרה קבוצה"
  },
  "search": {
    "searchIconTooltip": "חפש בשכבה זו",
    "noResultFoundText": "לא נמצאו תוצאות",
    "searchInEditModeAlert": "חיפוש אינו זמין בעת עריכה"
  },
  "manualRefresh": {
    "manualRefreshIconTooltip": "רענן",
    "confirmManualRefreshText": "כן_All selections and unsaved changes will be discarded_________________ש"
  },
  "help": {
    "helpIconTooltip": "עזרה"
  },
  "filter": {
    "noFeatureFoundText": "לא נמצאה תכונה עבור ערך זה.",
    "distinctQueryFailed": "כן_No distinct values found for the field_____________ש.",
    "andText": "וגם",
    "filterInEditModeAlert": "כן_Filters unavailable while editing___________ש.",
    "dropdownSelectOption": "בחר",
    "filterInShowSelectedEditModeAlert": "כן_Filters unavailable in 'Show Selected' mode______________ש."
  },
  "detailsPanel": {
    "editContentText": "ערוך רשומה"
  },
  "signOutPage": {
    "signOutMessage": "התנתקת בהצלחה",
    "reSignInMessage": "לחץ כאן כדי להתחבר"
  },
  "selectionOptions": {
    "selectionOptionsIconTooltip": "כן_Selection Options______ש",
    "showAllOptionText": "כן_Show All___ש",
    "showSelectedOptionText": "כן_Show Selected_____ש"
  }
});