using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DBContext.Migrations
{
    public partial class UpdatePlantTimeIntervalToInt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "WaterInterval",
                table: "Plants");

            migrationBuilder.AddColumn<int>(
                name: "WaterIntervalInDays",
                table: "Plants",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "WaterIntervalInDays",
                table: "Plants");

            migrationBuilder.AddColumn<TimeSpan>(
                name: "WaterInterval",
                table: "Plants",
                type: "time",
                nullable: false,
                defaultValue: new TimeSpan(0, 0, 0, 0, 0));
        }
    }
}
