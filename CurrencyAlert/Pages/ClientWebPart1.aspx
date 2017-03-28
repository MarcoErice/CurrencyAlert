<%@ Page language="C#" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<WebPartPages:AllowFraming ID="AllowFraming" runat="server" />

<html>
<head>
    <title></title>

    <script src="../Scripts/jquery-3.1.1.min.js"></script>
	<script src="../Scripts/bootstrap.min.js"></script>
    <script src="../Scripts/Chart.min.js"></script>
    <script src="../Scripts/moment.min.js"></script>
    <script src="../Scripts/moment-with-locales.min.js"></script>
    <script src="../Scripts/jmoney.min.js"></script>
	<script src="../Scripts/App.js"></script>

    <script type="text/javascript" src="/_layouts/15/MicrosoftAjax.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>

	<link href="../Content/bootstrap.min.css" rel="stylesheet" />
	<link href="../Content/App.css" rel="stylesheet" />

</head>
<body>
	<div class="container">
		<div class="jumbotron col-md-6">
			<h3 class="text-center">Today's XchangeRate </h3>
			
			<!--moment data will be inserted in this section-->
			<div class="panel panel-success text-center">
				<div class="panel-heading" id="displayMoment">
					<div id ="date"></div>
					<div id ="day"></div>
					<div id="time"></div>
				</div>
			</div> 

			<!--currency converter will be displayed here-->
			
			<div class="row">	
				<div class= "col-sm-6 text-center" id="xChange1">
					<div class="well" id="usdeur"></div>
				</div>
				<div class="col-sm-6 text-center" id="xChange2">
					<div class="well" id="usdsek"></div>
				</div>
				</div>			    
			
			<!--news feed-->
			<div class="panel panel-success text-center">
				<div class="panel-heading" id="newsFeed">LATEST NEWS:<br /></div>
				</div>
			<div id="errorHandler"></div>
		</div>
	</div>

</body>
</html>
