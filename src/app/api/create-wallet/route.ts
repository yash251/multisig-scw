import { prisma } from "@/utils/db";
import { walletFactoryContract } from "@/utils/getContracts";
import { randomBytes } from "crypto";
import { NextRequest, NextResponse } from "next/server";