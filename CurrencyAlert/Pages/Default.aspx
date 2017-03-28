<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <script type="text/javascript" src="../Scripts/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="../Scripts/Chart.min.js"></script>
    <script type="text/javascript" src="../Scripts/moment.min.js"></script>
    <script type="text/javascript" src="../Scripts/moment-with-locales.min.js"></script>
    <script type="text/javascript" src="https://openexchangerates.github.io/money.js/money.min.js"></script>
     <link href="../Content/flag-icon.min.css" rel="stylesheet" />
    <SharePoint:ScriptLink name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />
    <meta name="WebPartPageExpansion" content="full" />

    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />
	<link href="../Content/bootstrap.min.css" rel="stylesheet" />

    <script type="text/javascript" src="../Scripts/App.js"></script>
</asp:Content>

<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    
</asp:Content>

<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

<div class="container">
<div class="row">
	<table class="table table-bordered table-hover">
		<thead>
			<th>#</th>
			<th class="text-center">USD <span class="flag-icon flag-icon-us flag-icon-squared"></span></th>
			<th class="text-center">EUR <span class="flag-icon flag-icon-eu flag-icon-squared"></span></th>
			<th class="text-center">GBP <span class="flag-icon flag-icon-gb flag-icon-squared"></span></th>
			<th class="text-center">SEK <span class="flag-icon flag-icon-se flag-icon-squared"></span></th>
			<th class="text-center">JPY <span class="flag-icon flag-icon-jp flag-icon-squared"></span></th>
			<th class="text-center">AUD <span class="flag-icon flag-icon-au flag-icon-squared"></span></th>
			<th class="text-center">NOK <span class="flag-icon flag-icon-no flag-icon-squared"></span></th>
			<th class="text-center">DKK <span class="flag-icon flag-icon-dk flag-icon-squared"></span></th>
		</thead>
<tbody class="text-center">
<tr>
	<th scope="row">1 USD <span class="flag-icon flag-icon-us flag-icon-squared"></span></th>
	<td> 1</td>
	<td><div id="usdEur"></div></td>
	<td><div id="usdGbp"></div></td>
	<td><div id="usdSek"></div></td>
	<td><div id="usdJpy"></div></td>
	<td><div id="usdAud"></div></td>
	<td><div id="usdNok"></div></td>
	<td><div id="usdDkk"></div></td>
</tr>
	
	<tr>
		<th scope="row">1 EUR <span class="flag-icon flag-icon-eu flag-icon-squared"></span></th>
	<td><div id="eurUsd"></div></td>
	<td>1</td>
	<td><div id="eurGbp"></div></td>
	<td><div id="eurSek"></div></td>
	<td><div id="eurJpy"></div></td>
	<td><div id="eurAud"></div></td>
	<td><div id="eurNok"></div></td>
	<td><div id="eurDkk"></div></td>
	</tr>
	<tr>
		<th scope="row">1 GBP <span class="flag-icon flag-icon-gb flag-icon-squared"></span></th>
	<td><div id="gbpUsd"></div></td>
	<td><div id="gbpEur"></div></td>
	<td>1</td>
	<td><div id="gbpSek"></div></td>
	<td><div id="gbpJpy"></div></td>
	<td><div id="gbpAud"></div></td>
	<td><div id="gbpNok"></div></td>
	<td><div id="gbpDkk"></div></td>
	</tr>
	<tr>
		<th scope="row">1 SEK <span class="flag-icon flag-icon-se flag-icon-squared"></span></th>
	<td><div id="sekUsd"></div></td>
	<td><div id="sekEur"></div></td>
	<td><div id="sekGbp"></div></td>
	<td>1</td>
	<td><div id="sekJpy"></div></td>
	<td><div id="sekAud"></div></td>
	<td><div id="sekNok"></div></td>
	<td><div id="sekDkk"></div></td>
	</tr>
	<tr>
		<th scope="row">1 JPY <span class="flag-icon flag-icon-jp flag-icon-squared"></span></th>
	<td><div id="jpyUsd"></div></td>
	<td><div id="jpyEur"></div></td>
	<td><div id="jpyGbp"></div></td>
	<td><div id="jpySek"></div></td>
	<td>1</td>
	<td><div id="jpyAud"></div></td>
	<td><div id="jpyNok"></div></td>
	<td><div id="jpyDkk"></div></td>
	</tr>
	<tr>
		<th scope="row">1 AUD <span class="flag-icon flag-icon-au flag-icon-squared"></span></th>
	<td><div id="audUsd"></div></td>
	<td><div id="audEur"></div></td>
	<td><div id="audGbp"></div></td>
	<td><div id="audSek"></div></td>
	<td><div id="audJpy"></div></td>
	<td>1</td>
	<td><div id="audNok"></div></td>
	<td><div id="audDkk"></div></td>
	</tr>
	<tr>
		<th scope="row">1 NOK <span class="flag-icon flag-icon-no flag-icon-squared"></span></th>
	<td><div id="nokUsd"></div></td>
	<td><div id="nokEur"></div></td>
	<td><div id="nokGbp"></div></td>
	<td><div id="nokSek"></div></td>
	<td><div id="nokJpy"></div></td>
	<td><div id="nokAud"></div></td>
	<td>1</td>
	<td><div id="nokDkk"></div></td>
	</tr>
	<tr>
		<th scope="row">1 DKK <span class="flag-icon flag-icon-dk flag-icon-squared"></span></th>
	<td><div id="dkkUsd"></div></td>
	<td><div id="dkkEur"></div></td>
	<td><div id="dkkGbp"></div></td>
	<td><div id="dkkSek"></div></td>
	<td><div id="dkkJpy"></div></td>
	<td><div id="dkkAud"></div></td>
	<td><div id="dkkNok"></div></td>
	<td>1</td>
	</tr>
</tbody>
	</table>
</div>
</div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"></script>

</asp:Content>
